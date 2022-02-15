const biodataController = require('../controller/biodataController')

const biodataRouter= require('express').Router()

biodataRouter.get("/hello", biodataController.renderHello)
biodataRouter.get("/", biodataController.viewAll)
biodataRouter.get("/add",biodataController.getAddForm)
biodataRouter.post("/add",biodataController.addUsers)
biodataRouter.get("/:id/edit",biodataController.getFormEdit)
biodataRouter.post("/:id/edit",biodataController.editUsers)
biodataRouter.get("/:id/delete", biodataController.deleteBiodata)

module.exports = biodataRouter;