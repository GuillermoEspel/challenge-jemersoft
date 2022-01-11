const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = require('./swaggerOptions').options;
const specs = swaggerJSDoc(swaggerOptions);

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
const pokemonRoutes = require('./routes/pokemon');
app.use('/pokemon', pokemonRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

module.exports = app;