const { History } = require("../models")

class historyController {
    static renderHello(req, res) {
        res.send("hello")
    }

    static viewAll(req,res) {
        History.findAll({
            order: [["id",'ASC']]
        })
        .then((data) =>{
            res.render("history",{ data })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
}

module.exports = historyController