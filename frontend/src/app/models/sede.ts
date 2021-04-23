export class Sede {

    //inicializamos el constructor con los siguiente parametros
    constructor(_id="", nombre="", localizacion="", poblacion=""){
        this._id=_id;
        this.nombre=nombre;
        this.localizacion=localizacion;
        this.poblacion=poblacion;
    }

    _id: string;
    nombre: string;
    localizacion: string;
    poblacion: string;
}