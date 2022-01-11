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
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

module.exports = {
  options
};