const express = require("express");
const dotenv = require("dotenv");
const connectdb = require("./database/connection");
const Users = require("./model/scheme");
const app = express();
const blogRoutes = require("./routes/blogroutes");
dotenv.config();

port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});

connectdb();
//register view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Middleware & static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  Users.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All users", users: result });
    });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/add", (req, res) => {
  res.render("add", { title: "Add User" });
});

app.use(blogRoutes);

