const { Login } = require ("../data/data.json")
const fs = require('fs')

class loginController {
    static renderHello(req, res) {
        res.send("hello")
    }

    static loginRender(req, res) {
        const { username, password } = req.body
        const foundUser = fs.readFileSync('data/data.json',"utf-8")
        const parsedData = JSON.parse(foundUser)
        const userFound = parsedData.find((user) => user.username == username, user.password == password)
        if (!userFound){
            console.log("berhasil")
            // res.redirect("/users")
        }else {
            console.log("gagal")
            // res.redirect("/")
            // alert("wrong")
        }
    }
}

module.exports =loginController