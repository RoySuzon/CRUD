const express = require('express');
const mongoose = require('mongoose');
const { basename } = require('path');
route = require('./Route/route');
const url = require('url');
require('dotenv').config();
const app = express()
const port = process.env.PORT
// const mongoConfig = MONGO;
async function connectMongoDB() {
    // await mongoose.connect(`${process.env.MONGO}`).
    await mongoose.connect("mongodb+srv://roybd3600:roybd3600@cluster0.kffjmdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").
        catch(error => handleError(error));
    console.log('Connected MongoDB !')
}

// Or:
// try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
// } catch (error) {
//     handleError(error);
// }
app.use("/api", route);

app.get('/', (req, res) => {

    res.send({ baseUrl: `http://192.168.0.100:${port}` });
})


app.get('/data', (req, res) => {

    try {
        res.send({
            status: true,
            baseUrl: `http://192.168.0.100:${port}`,
        })
    } catch (error) {
        res.status(404).send({
            status: false,
            "message": e.message

        })
    }
})

app.use((req, res) => {
    res.status(404).send()
});
app.listen(port, connectMongoDB(), () => console.log(`http://localhost:${port}`))