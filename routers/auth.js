const express = require("express")
const router = express.Router()

const imageUpload = require("../helpers/imageUpload.js")
const authController = require("../controllers/auth.js")

// Register
router.post("/user/register", authController.userRegister)
router.post("/gym/register", imageUpload.upload.single('photo'), authController.gymRegister)

// Login
router.post("/login", authController.login)

// Reset Password
router.post("/forgotPassword", authController.forgotPassword)
router.put("/newPassword/:token", authController.newPassword)

// Confirm Account
router.put("/newConfirmToken/", authController.newConfirmToken)
router.post("/confirmAccount/:token", authController.confirmAccount)


module.exports = router