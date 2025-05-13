const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

// Ruta al archivo swagger.json
const swaggerFilePath = path.join(__dirname, 'swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, 'utf-8'));

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
