const userCtrl = {}

const User = require('../models/User')

//our User's CRUD
userCtrl.getAllUsers = async (req, res) => {

    const users = await User.find()
    res.json(users)
}

userCtrl.createUser = async (req, res) => {

    console.log(req.body)

    //we create this object to not take user's id
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    console.log(newUser);

    //this takes some time!
    await newUser.save()
    res.send({message: '¡Ya estás registrado en el sistema!'})
}

userCtrl.deleteUser = async (req, res) => {
    
    console.log(req.params)

    await User.findByIdAndDelete(req.params.id)

    res.json({status: 'Usuario eliminado correctamente'})
}

userCtrl.updateUser = async (req, res) => {

    console.log(req.params)

    //we obtain id before we give it
    const { id } = req.params;

    //we want to modify this object with these parameters
    const modifiedUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }

    //if any parameter doesn't exist we create it
    await User.findByIdAndUpdate(id,{$set: modifiedUser}, {new: true})

    res.json({status: 'Usuario actualizado correctamente'})
}

userCtrl.getUser = async (req, res) => {

    console.log(req.params)

    const user = await User.findById(req.params.id)

    res.send(user)
}

module.exports = userCtrl;