const  express = require('express');//On importe Express
const router = express.Router();//On crée une variable router qui utliser le méthode router d'express.

router.get('/ping', (req, res)=>{ //lorsque quelqun'un fera une requête sur le localhost:3000/ping
    res.status(200).json({msg: 'pong', date: new Date()});// res = ce que nous voulons retourner au client (type 200 indique que tout vas bien)
});

module.exports = router; // sert à exporter la requête afin de pouvoir l'utiliser dans un autre script.
