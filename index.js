require('dotenv').config()
const express = require("express");
const app = express();
const secureApi = require("./middleware/secureApi.js");
const registrationController = require("./controller/registrationController.js");
const loginController = require("./controller/loginController.js")
const emailVerificationController = require("./controller/emailVerificationController.js")
const blogPostController = require("./controller/blogPostController.js")
//const profile = require("./controller/profile.js");
const dbConnection = require("./helper/dbConnection.js");
const getAllBlogController = require('./controller/getAllBlogController.js');
const multer  = require('multer')
const path = require('path')
dbConnection()
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log("file",file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })




app.post("/registration", secureApi, registrationController);
//app.get("/profile", secureApi, profile);
app.post("/login", secureApi, loginController);

app.post("/blogpost", secureApi,upload.single('avatar'), blogPostController);

app.get("/blogpost", secureApi, getAllBlogController);

app.get("/:email", emailVerificationController);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});