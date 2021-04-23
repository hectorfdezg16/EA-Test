const { Router } = require('express') 

const router = Router()

//en verdad tendria que haber sido "sedes.controller.js", me equivocado... ¡Ups!
const sedesCtrl = require('../controllers/sede.controller.js')

//ponemos todas las rutas que luego utiliaremos
router.get('/', sedesCtrl.getAllSedes);
router.post('/', sedesCtrl.createSede);
router.delete('/:id', sedesCtrl.deleteSede);
router.put('/:id', sedesCtrl.updateSede);
router.get('/:id', sedesCtrl.getSede);


//private routes
router.get('/privado/elemento1', sedesCtrl.getElementoUno);
router.get('/privado/elemento2', sedesCtrl.getElementoDos);

//we will export
module.exports = router;