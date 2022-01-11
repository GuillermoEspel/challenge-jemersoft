const app = require('./app');
app.listen(app.get('port'));

console.log(`Listeninig on port ${app.get('port')}`);