const historyController = require('../controller/historyController')

const historyRouter= require('express').Router()

historyRouter.get("/hello", historyController.renderHello)
historyRouter.get("/", historyController.viewAll )

module.exports = historyRouter;