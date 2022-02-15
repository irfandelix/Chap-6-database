const router = require('./routes')
const express = require('express')
const app = express()
// const fs = require('fs')
const port = 3000
const { Users, Biodata, History } = require("./models")
// const userRouter = require('./routes/userRouter')
// const historyRouter = require('./routes/historyRouter')
// const biodataRouter = require('./routes/biodataRouter')

// app.use("/user", userRouter)
// router.use("/history", historyRouter)
// router.use("/biodata", biodataRouter)

app.use(express.static('views'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// const apiRouter = express.Router()
// const v1 = express.Router()
// app.use('/api', apiRouter)
// apiRouter.use('/v1',v1)

// router.get("/", (req, res) => {
//     res.render('halo')
// })

// v1.post("/login", (req, res) => {
//     const { username, password } = req.body
//     const foundUser = fs.readFileSync('data/data.json',"utf-8")
//     const parsedData = JSON.parse(foundUser)
//     const userFound = parsedData.find((user) => user.username == username && user.password == password)
//     if (!userFound){
//         console.log("gagal")
//         // res.redirect("/")
//     } else {
//         console.log("sukses")
//         // res.use("/user", userRouter)
//     // }else {
//         // console.log("belum punya")
//         // res.redirect("/")
//         // alert("wrong")
//     }
// })

app.use(router)

app.listen(port,() => {
    console.log(`running on port: ${port}`)
})