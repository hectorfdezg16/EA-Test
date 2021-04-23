const { Schema, model } = require('mongoose')

const sedeSchema = new Schema({
    nombre: { type:String, required: true},

    //localizacion lo he hecho como un array de numeros, tambien se podria hacer como String
    //seguro que daria menos problemas pero creo que es menos eficiente
    //si nos da problemas cambiaremos a String
    //grados con decimales

    /*localizacion: [
        {
            latitud: {type: Number, min: 1, max: 80, required:true},
            longitud: {type: Number, min: 1, max: 80, required:true},
        }
    ],*/

    //hemos decidido implementarlo al final como String por si acaso
    localizacion: { type: String, required: true},
    poblacion: { type: String, required: true},
    

    //vamos a crear unos parametros extras para incluirlos en el minimo
    //debido a que ha sido por mi cuenta los pondremos a false, ya que no son requeridos
    gradoCalidad: { type: Number, required: false},
    fechaCreacion: { type: Date, required: false},
    fotoSede: { type: Buffer, required: false}
}, {
    //timestamps adds createDate and updateDate of the object
    timestamps: true,
    versionKey: false

})

//we will export our entity
module.exports = model('Sede', sedeSchema);