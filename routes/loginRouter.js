const loginController = require('../controller/loginController.js')

const loginRouter = require('express').Router()

loginRouter.get("/hello",loginController.renderHello)
loginRouter.post("/", loginController.loginRender)

module.exports = loginRouter;