const express = require("express")
const {signup, deleteUserProfile, updateUserProfile, getSingalUser, getAllUser } = require("../controllers/index")


const router = express()

router.route("/signup").post(signup)
router.route("/delete").delete(deleteUserProfile)
router.route("/update").patch(updateUserProfile)
router.route("/getSingaluser/:id").get(getSingalUser)
router.route("/getAllUser").get(getAllUser)



module.exports = router