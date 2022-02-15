const { Biodata } = require("../models")

class biodataController {
    static renderHello(req, res) {
        res.send("hello")
    }

    static viewAll(req,res) {
        Biodata.findAll({
            order: [["id",'ASC']]
        })
        .then((data) =>{
            res.render("biodata",{ data })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    static getAddForm(req, res) {
        res.render("biodata/add")
    }

    static addUsers(req, res) {
        let newBiodata = {
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            gender: req.body.gender,
            email: req.body.email
        }
        Biodata.create(newBiodata)
        .then((_) => {
            res.redirect("/biodata")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static getFormEdit(req,res) {
        const id = req.params.id
        Biodata.findByPk(id).then((data) => {
             console.log(data)
             res.render('biodata/edit', { data })
        })
        .catch((err) => {
              console.log(err)
        })
    }

    static editUsers(req,res) {
        const id = req.params.id
        let updatedUsers = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            gender: req.body.gender,
            email: req.body.email
        }
        Biodata.update(updatedUsers, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect("/biodata")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static deleteBiodata(req,res) {
        const id = req.params.id
        Biodata.destroy({
            where: { id: id }
        })
        .then(() =>{
            res.redirect("/biodata")
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = biodataController