const express = require('express')
const UserController = require('../controller/UserController');
const router = express.Router()

router.get("/", UserController.getLasttoSecondData)

router.get("/get-all-users", UserController.getAllUser)

router.get("/get-by-id/:id", UserController.getById)




module.exports = router;
