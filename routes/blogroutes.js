const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

router.post("/add", blogController.add_blog);
  
router.get("/edit/:id", blogController.show_blog);
  
router.post("/edit/:id", blogController.edit_blog);
  
router.delete("/delete/:id", blogController.delete_blog);

module.exports = router
  