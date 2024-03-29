const express = require("express")
const router = express.Router()

const gymController = require("../controllers/gym.js")
const isAuth = require("../middlewares/isAuth.js")
const isConfirm = require("../middlewares/isConfirm.js")

const imageUpload = require("../helpers/imageUpload.js")

router.put("/editProfile", [isAuth, isConfirm], gymController.editProfile)
router.put("/changedPassword", [isAuth, isConfirm], gymController.changedPassword)
router.post("/photoUpload", [isAuth, isConfirm], imageUpload.upload.array('photos', 3), gymController.photoUpload)
router.put("/ppChanged", [isAuth, isConfirm], imageUpload.upload.single('photo'), gymController.ppChanged)

module.exports = router