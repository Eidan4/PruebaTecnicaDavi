const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

class Server1 {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 9000;
        this.server = require('http').createServer(this.app);
        this.path = {
            compania: '/api/compania',
        };

        this.connectDB();

        this.middlewares();

        this.routes();

    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());

        this.app.use( express.json() );

        this.app.use( express.static('public') );

        this.app.use( bodyParser.urlencoded({ extended: false }) );

        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath:true
        }));
    }

    routes() {
        this.app.use(this.path.compania, require('../routes/compania'));
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server1;