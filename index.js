const express = require('express');
const mongoose = require('mongoose');
const { basename } = require('path');
route = require('./Route/route');
const url = require('url');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 4000
// const mongoConfig = MONGO;
async function connectMongoDB() {
    // await mongoose.connect(`${process.env.MONGO}`).
    await mongoose.connect(`${process.env.MONGO}`).
        catch(error => handleError(error));
    console.log('Connected MongoDB !')
}

// Or:
// try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
// } catch (error) {
//     handleError(error);
// }


app.use("/api", express.urlencoded({ extended: false }), express.json(), route);

// app.get('/', (req, res) => {

//     res.send({ 
//         created_By:"https:github.com/roySuzon",
//         baseUrl: `https://crud-99vs.onrender.com` });
// })


app.get('/data', (req, res) => {

    try {
        res.send({
            status: true,
            created_By:"Goutom Roy",
            url:"https://github.com/roySuzon",
            mail:"goutomroy770@gmail.com",
            baseUrl: `https://crud-99vs.onrender.com`,
        })
    } catch (error) {
        res.status(404).send({
            status: false,
            "message": e.message

        })
    }
})
app.use((req, res) => {
    res.status(404).send(`<center>   <h1>You are hacked by <a href="https:github.com/roySuzon">ROYSUZON</a>!</h1> </center> `)
});

app.listen(port, connectMongoDB(), () => console.log(`http://localhost:${port}`))