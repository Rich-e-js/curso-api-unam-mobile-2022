import express from 'express';
import cors from 'cors';
const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors());

app.set('json spaces',2)

app.get('/', function (req, res) {
    res.send("Esto es la raiz de mi API un beso enelano")
})

app.get('/suma/:a/:b', function (req, res) {
    const{a, b} = req.params;
    if (b=="q") {//regexp para verificar que b olo tiene cracteres numericos
        res.status(502).send("error")
    }else{
        res.status(200).send(`${parseInt(a)+parseInt(b)}`)
    }
})

app.get('/nombre', function (req, res) {
    res.status(200).send("mi nombre es Ricardo")
})

app.get('/apellido/:apellido', function (req, res) {
    const {apellido} = req.params;
    res.status(200).send(apellido)
})

app.post('/password', function (req, res) {
    const{pw} = req.body;
    if (pw == 'supersecretpassword!') {
        res.status(200).send(`loggeado`)
    }else{
        res.status(401).send(`no loggeado`)
    }
    
})

app.post('/resta', function (req, res) {
    const{a, b} = req.body;
    res.status(201).send({
        a: a,
        b: b,
        resta: parseInt(a) - parseInt(b)
    })
})

app.post('/multiplicacion', function (req, res) {
    const{a, b} = req.body;
    res.status(201).send({
        a: a,
        b: b,
        resta: parseInt(a) * parseInt(b)
    })
})

app.get('/personalinfo', function (req, res) {
    res.status(200).send({
        nombre: "Ricardo",
        apellido: "Juarez",
        edad: 25,
        sexo: "cuando se puede",
        contacto:{
            telefono: "5530099529",
            depto: 502,
            casado: false
        }
    })
})

app.get('/personalinfo/:n', function (req, res) {
    const{n}= req.params;
    res.status(200).send({
        num: n,
        nombre: "Ricardo",
        apellido: "Juarez",
        edad: 25,
        sexo: "cuando se puede",
        contacto:{
            telefono: "5530099529",
            depto: 502,
            casado: false
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`puerto http://localhost:${PORT}`)
})
