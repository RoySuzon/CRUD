const express = require('express');
const { Person } = require('../Schema/schema');

const route = express.Router();

route.get("/login", (req, res) => {
    res.send("LOGIN");
})

route.post('/update/:id', express.urlencoded({ extended: false }), express.json(), async function (req, res) {
    const { id } = req.params;
    const { title } = req.body;

    try {
        await Person.findByIdAndUpdate(id, { $set: { title: title } });
        res.send(await Person.findById(id));
    } catch (error) {
        res.status(404).send(error.message);
    }
});
route.get('/delete/:id', async function (req, res) {
    const { id } = req.params;

    await Person.findByIdAndDelete(id)
    try {
        res.send(true);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.post('/post', function (req, res) {

    const { title, author, body } = req.body;
    const person = new Person({ title: title, author: author, body: body });
    if (title != null && author != null && body != null) {
        person.save();
        res.status(202).send({
            status: true,
            person
        });
    }
    else {
        res.status(404).send({ status: false })
    }
});


route.get("/user", async (req, res) => {

    const person = await Person.find();

    res.send({
        status: true,
        users: person
    });
});


module.exports = route;
