export class User {
    //we initialize a constructor with some default params
    constructor(_id="", username="", email="", password="", role=""){
        this._id=_id;
        this.username=username;
        this.email=email;
        this.password=password;
        this.role=role;
    }

    _id: string;
    username: string;
    email: string;
    password: string;
    role: string;
}
