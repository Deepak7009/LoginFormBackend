const user = require("../models/userSchema");

const addUser = async (req, res) => {
    try {
        const users = req.body;
        console.log("Received data:", users);
        
        const userCreate = await user.create(users);
        console.log("Users created:", userCreate);

        res.send(userCreate);
    } catch (err) {
        console.error("Error creating users:", err);
        res.status(500).send("Internal Server Error");
    }
};


const getUser = async (req, res) => {
    user.find().then((users) => {
        console.log(users);
        res.send({ "User Data =>": users });
    })
        .catch((err) => console.log(err));
}

module.exports = { addUser, getUser }