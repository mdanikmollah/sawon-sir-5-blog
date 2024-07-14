let Blog = require("../model/blogModel.js")

  

let blogPostController = (req,res) => {
    console.log("req.file");
//     const {title, description, image, postedBy} = req.body

//     let blog = new Blog({
//         title:title,
//         description:description,
//         image:image,
//         postedBy:postedBy


//     })

//     blog.save()
//     res.send({message:"Blog post done successfully"})
 }

module.exports = blogPostController