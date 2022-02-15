const userRouter = require('./userRouter')
const historyRouter = require('./historyRouter')
const biodataRouter = require('./biodataRouter')
const loginRouter = require('./loginRouter')

const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("home")
})

router.use("/users", userRouter)
router.use("/history", historyRouter)
router.use("/biodata", biodataRouter)
router.use("/login", loginRouter)

module.exports = router