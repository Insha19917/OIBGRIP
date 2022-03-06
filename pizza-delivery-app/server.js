const express = require("express")
const app = express()
const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts")
const path = require("path")
const PORT = process.env.PORT || 3000


//set Template engine
app.use(expressLayout)
app.set("views", path.join(__dirname, "/resources/views"))
app.set("view engine", "ejs")


app.get("/", (req, res) =>
{
    res.render("home")
})

//cart page
app.get("/cart", (req, res) =>
{
    res.render("customers/cart")
})

//login page
app.get("/login", (req, res) =>
{
    res.render("auth/login")
})

//register page
app.get("/register", (req, res) =>
{
    res.render("auth/register")
})

//Set Assets
app.use(express.static("public"))


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})