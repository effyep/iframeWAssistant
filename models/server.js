const express = require('express');
const cors = require('cors');




class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/datos'
        this.middlewares();
        this.routes();
        
        
    }

    middlewares() {
        //directorio publico
        this.app.use(cors());
        this.app.use(express.static('public'));

        //setear plantilla de vistas
        this.app.set('view engine', 'ejs');
        

        //Lectura y parseo del body
        this.app.use(express.json())
    }

    routes() {
        

        this.app.use( this.usuariosPath, require('../routes/users-routes.js'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server