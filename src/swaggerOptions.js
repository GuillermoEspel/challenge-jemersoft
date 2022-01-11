const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PokeAPI',
      version: '1.0.0',
      description: 'Description'
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