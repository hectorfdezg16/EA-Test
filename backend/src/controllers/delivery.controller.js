const deliveryCtrl = {}

const Delivery = require('../models/Delivery')

//CRUD
deliveryCtrl.getAllDeliveries = async (req, res) => {

    const deliveries = await Delivery.find()
    res.json(deliveries)
}

deliveryCtrl.createDelivery = async (req, res) => {

    console.log(req.body)

    //we create this object to not take delivery's id
    const newDelivery = new Delivery({
        lotItem: req.body.logItem,
        originLocation: req.body.originLocation,
        destinationLocation: req.body.destinationLocation,
        destinationItem: req.body.destinationItem,
        deliveryDate: req.body.deliveryDate,
        isPicked: req.body.isPicked,
        isDelivered: req.body.isDelivered,
        businessItem: req.body.businessItem,
        isAssigned: req.body.isAssigned,
        userItem: req.body.userItem
    });

    console.log(newDelivery);

    //this takes some time!
    await newDelivery.save()
    res.send({message: '¡Ya está creado el Delivery en el sistema!'})
}

deliveryCtrl.deleteDelivery = async (req, res) => {
    
    console.log(req.params)

    await Delivery.findByIdAndDelete(req.params.id)

    res.json({status: 'Delivery eliminado correctamente'})
}

deliveryCtrl.updateDelivery = async (req, res) => {

    console.log(req.params)

    //we obtain id before we give it
    const { id } = req.params;

    //we want to modify this object with these parameters
    const modifiedDelivery = {
        lotItem: req.body.logItem,
        originLocation: req.body.originLocation,
        destinationLocation: req.body.destinationLocation,
        destinationItem: req.body.destinationItem,
        deliveryDate: req.body.deliveryDate,
        isPicked: req.body.isPicked,
        isDelivered: req.body.isDelivered,
        businessItem: req.body.businessItem,
        isAssigned: req.body.isAssigned,
        userItem: req.body.userItem
    }

    //if any parameter doesn't exist we create it
    await Delivery.findByIdAndUpdate(id,{$set: modifiedDelivery}, {new: true})

    res.json({status: 'Delivery actualizado correctamente'})
}

deliveryCtrl.getDelivery = async (req, res) => {

    console.log(req.params)

    const delivery = await Delivery.findById(req.params.id)

    res.send(delivery)
}

module.exports = deliveryCtrl;