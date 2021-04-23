const sedeCtrl = {}

//requerimos el modelo Sede
const Sede = require('../models/Sede');

//en pricipio no utilizaremos el token para el examen
//const jwt = require('jsonwebtoken');

//el crud de nuestra sede --> se que no lo necesitamos pero he querido ampliarlo un poco mas
sedeCtrl.getAllSedes = async (req, res) => {

    const sedes = await Sede.find()
    res.json(sedes)
}

sedeCtrl.createSede = async (req, res) => {

    console.log(req.body)

    //creamos el objeto sede
    const nuevaSede = new Sede({
        nombre: req.body.nombre,
        localizacion: req.body.localizacion,
        poblacion: req.body.poblacion
    });

    console.log(nuevaSede);

    //this takes some time!
    await nuevaSede.save()
    res.send({message: '¡Ya está la sede metida en el sistema!'})
}

sedeCtrl.deleteSede = async (req, res) => {
    
    console.log(req.params)

    await Sede.findByIdAndDelete(req.params.id)

    res.json({status: '¡Esta sede ya se ha eliminado correctamente!'})
}

sedeCtrl.updateSede = async (req, res) => {

    console.log(req.params)

    //we obtain id before we give it
    const { id } = req.params;

    //queremos modificar los siguientes parametros de la sede
    //evidenetemente solo los que pusimos en true
    const modificadaSede = {
        nombre: req.body.nombre,
        localizacion: req.body.localizacion,
        poblacion: req.body.poblacion
    };

    //if any parameter doesn't exist we create it
    await Sede.findByIdAndUpdate(id,{$set: modificadaSede}, {new: true})

    res.json({status: '¡Sede moficada perfecta!'})
}

sedeCtrl.getSede = async (req, res) => {

    console.log(req.params)

    const sede = await Sede.findById(req.params.id)

    res.send(sede)
}

sedeCtrl.getElementoUno = (req, res)=>{
    res.status(200).send('¡Perfecto!');
}

sedeCtrl.getElementoDos = (req, res)=>{
    res.status(200).send('¡Perfecto!');
}

module.exports = sedeCtrl;