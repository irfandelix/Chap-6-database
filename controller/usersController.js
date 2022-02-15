const { Users } = require("../models")

class usersController {
    static renderHello(req, res) {
        res.send("hello")
    }

    static viewAll(req,res) {
        Users.findAll({
            order: [["id",'ASC']]
        })
        .then((data) =>{
            res.render("user",{ data })
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    static getAddForm (req,res) {
        res.render("user/add")
    }

    static addUsers (req,res) {
        let newUsers = {
            username: req.body.username,
            password: req.body.password
        }
        Users.create(newUsers)
        .then((_) => {
            res.redirect("/users")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static deleteUser(req,res) {
        const id = req.params.id
        Users.destroy({
            where: { id: id }
        })
        .then(() =>{
            res.redirect("/users")
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = usersController