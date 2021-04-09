import { Component, OnInit } from '@angular/core';

//we import all our services then we initialize them to use on providers point
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {

  //we put on the constructor private variable of the service that we will use
  constructor(public authService: AuthService) { }

  ngOnInit(): void {}

  onLogin(){

  }

}
