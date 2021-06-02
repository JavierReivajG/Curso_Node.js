const express = require("express")
const response = require("../../network/response")
const controller = require("./controller")
const router = express.Router()

router.get("/",function(req, res) {
    console.log(req.headers)
    res.header ({
        "custom-header": "nuetro valor personalizado",
    });
    response.success(req, res, "lista de mensajes")
})
router.post("/", function(req, res) {

    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req, res, fullMessage,201)
    })
    .catch(e => {
        response.error(req, res, "Informacion invalida", 400, "Error en el controler")
    })
})

module.exports = router