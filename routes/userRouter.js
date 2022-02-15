const UsersController = require('../controller/usersController')

const userRouter= require('express').Router()

userRouter.get("/hello", UsersController.renderHello)
userRouter.get("/", UsersController.viewAll )
userRouter.get("/add", UsersController.getAddForm)
userRouter.post("/add", UsersController.addUsers)
userRouter.get("/:id/delete", UsersController.deleteUser)

module.exports = userRouter;