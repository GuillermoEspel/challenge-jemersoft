const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Challenge Jemersoft',
      version: '1.0.0',
      description: 'REST API in Node.js - Pokemon API'
    },
    servers: [
      {
        url: 'https://challenge-jemersoft.herokuapp.com/',
        description: 'Production server'
      },
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

module.exports = {
  options
};