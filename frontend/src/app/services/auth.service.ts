import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL_API='http://localhost:4000/api/users';

  user: User;
  //our User's array (empty initially)
  users: User[];

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  //login // to develop
  loginUser(email: String, password: String){
    //return this.http.login(this.URL_API + `/${email}` +`/${password}`);
  }

}
