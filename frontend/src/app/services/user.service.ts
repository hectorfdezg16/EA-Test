import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  //our User's array (empty initially)
  users: User[];
  readonly URL_API='http://localhost:4000/api/users';

  constructor(private http: HttpClient) {
    this.selectedUser = new User();
  }

  //our CRUD as an admin (Postman or RestClient)

  getAllUsers(){
    return this.http.get(this.URL_API);
  }

  //we will add a User with a User's type object
  postUser(user: User){
    return this.http.post(this.URL_API, user);
  }

  putUser(user: User){
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
