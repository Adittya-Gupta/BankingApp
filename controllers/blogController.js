const Users = require("../model/scheme");

const add_blog = (req, res) => {
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: (req.body.status ==='on' ? true : false),
      });
      user
        .save()
        .then((result) => {
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
        });
}

const show_blog = (req, res) => {
    Users.findById(req.params.id)
      .then((result) => {
        res.render("details", { title: "Edit User", user: result });
      })
      .catch((err) => {
        console.log(err);
      });
}

const edit_blog = (req,res)=>{
    Users.findByIdAndUpdate(req.params.id, req.body)
    .then((result)=>{
      res.redirect("/");
    })
    .catch((err)=>{
      console.log(err);
    })
}

const delete_blog = (req,res)=>{
    const id = req.params.id;
    Users.findByIdAndDelete(id)
    .then(result=>{
      res.json({redirect:'/'})
    })
    .catch(err=>{
      console.log(err);
    })
}
module.exports = {add_blog, show_blog, edit_blog, delete_blog}
