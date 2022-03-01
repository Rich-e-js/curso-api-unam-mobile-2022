import express from 'express';
const router = express.Router();

function isNum(val){return /^\d+$/.test(val)};

router.get("/", (req, res)=>{
    res.send("raiz de las operaciones basicas: suma, resta, multiplicacion y division")
})

router.get("/suma/:a/:b", function (req, res) {
    const{a, b} = req.params;
    if (!isNum(a)|| !isNum(b)) {
        res.status(502).send("error")
    }else{
        res.status(200).send(`${parseInt(a)+parseInt(b)}`)
    }
})

module.exports.router = router;