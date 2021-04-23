const mongoose = require('mongoose')

//my-database = Project's database (originally empty)
const URI = 'mongodb://localhost/sede-covid-database'

mongoose
.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log("DB is connected!")) //if we connect correctly
.catch(err => console.error(err)); //elif (we don't connect correctly)

//we will export
module.exports = mongoose;
