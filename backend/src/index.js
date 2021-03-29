//look at these two files: index and server
require('./database')

//to commit
const app = require('./server')

app.listen(app.get('port'));

console.log('Server on port',app.get('port'));