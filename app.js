const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/home", (req,res) => {
    res.send("hello")
})

app.get("/page1", (req,res) => {
    res.send("page1")
})

app.get("/page2", (req,res) => {
    res.send("page2")
})

app.get("/page3", (req,res) => {
    res.send("page3")
})

app.get("/page4", (req,res) => {
    res.send("page4")
})

app.listen(port, () => console.log("listing on port " + port))
