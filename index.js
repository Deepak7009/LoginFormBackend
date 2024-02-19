const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const dbconnection = require("./config/dbConnection");
const { addUser, getUser } = require("./controller/userController");

app.use(cors());
app.use(express.json());
dbconnection();

app.get("/", (req, res) => {
    console.log("data", req.body);
    res.send("Hello Deepak verma"); 
});

// app.post("/addUser", addUser);
app.get("/user", getUser).post("/user", addUser);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
