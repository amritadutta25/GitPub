// import express
const express = require("express")

//import drinks array (database)
const drinks = require("./models/drinks.js")

// create express app object
const app= express()


//**************
// ROUTES
//**************

// GET request to "/"
app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

// INDEX ROUTE
// get route /drinks
app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks})
})

// SHOW ROUTE
app.get("/drinks/:id", (req, res) => {

    // getting the drink using the id from url params
    const id = req.params.id
    const drink = drinks[id]
    
    res.render("show.ejs", {drink})
})







// app listener to start the server
app.listen(3000, () => {console.log("Server listening on port 3000")})
