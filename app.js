const express = require('express'); //On importe express
const app = express(); // On stocke express sous forme de fonction
const api = require('./api/v1/index');//On réquipère le script dans lequel nous avons le router
//Installation de cors qui permet au domaine externes de pouvoir faire des requetes sur notre serveur
const cors = require('cors');

app.set('port', (process.env.port || 3000));//On configure le numéro de port que va utiliser l'applications express si il est configuré on l'utilise si non sur le 3000.

app.use(cors()); //Autorisation des serveur externes

app.use('/api/v1', api)//Définition du chemin d'accès des requetes clients a priori localhost:3000/api/v1 

app.listen(app.get('port'), () => {//On demande à l'application d'écouter le port configuré
    console.log(`express serveur listening on port ${app.get('port')}`);//Ce que nous voulons retourner (on affiche le port écouté)
});