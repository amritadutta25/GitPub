// import express
const express = require("express")

// create express app object
const app= express()

// ROUTES

// GET request to "/"
app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})







// app listener to start the server
app.listen(3000, () => {console.log("Server listening on port 3000")})
