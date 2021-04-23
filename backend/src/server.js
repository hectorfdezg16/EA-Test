console.log("hello world");

//Bcrypt ---> researching...

const morgan = require('morgan');

const express = require('express');

/**
 * we require these dependencies...
 * Big problems with swagger-jsdoc! ---> "type": "module" on package.json doesn't work! (ES Module)
 * const swaggerJsDoc = require('swagger-jsdoc');
 * const swaggerUi = require('swagger-ui-express');
 */

const cors = require('cors');

const app = express();

/**
 * content of the API...
 * //Extended: https://swagger.io/specification/ (Info Object)
 * const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Sede vacunación EXAMEN",
            description: "Este es un proyecto importante para poder vacunar a la gente",
            contact: {
                name: "Sede covid programmers"
            },
            version: "1.0.0"
        }
    },
    // ['.routes/*.js']
    apis: ["server.js"]
};
 * const swaggerDocs = swaggerJsDoc(swaggerOptions);
 * app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
 */

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.urlencoded({ extended: false }));

app.use("/api/sedes", require('./routes/sedes.routes'))

module.exports = app;