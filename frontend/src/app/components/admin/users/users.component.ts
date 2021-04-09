import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user';

//we import all our services then we initialize them to use on providers point
import { UserService } from '../../../services/user.service';

declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],
})
export class UsersComponent implements OnInit {

  //be careful, this constructor was private!!! 
  constructor(public userService: UserService) { }

  //if the app starts then we will execute getAllUsers
  ngOnInit(): void {
    this.getAllUsers();
  }

  //This is the event when we click the submit button
  addUser(form?: NgForm){

    //if id exists then we want to modify any parameter of user's entity 
    if(form.value._id){
      this.userService.putUser(form.value)
      .subscribe(res => {
        //console.log(res);
        this.getAllUsers();
        this.resetForm(form);
        M.toast({html: 'User modified succesfully!'})
      });
    } else {

      this.userService.postUser(form.value)
      .subscribe(res => {
        //after we have created a new user we order all users with our function
        this.getAllUsers();
        this.resetForm(form);
        M.toast({html: 'User created succesfully!'})
      });
    }
  }

  getAllUsers(){
    this.userService.getAllUsers()
    .subscribe(res => {
      //this.userService.users = res;
      this.userService.users = res as User[];
      console.log(res);
    });
  }

  updateUser(user: User){
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string, form: NgForm){
    if(confirm('Are you sure about this?')){
      this.userService.deleteUser(_id)
      .subscribe(res=>{
        this.getAllUsers();
        this.resetForm(form);
        M.toast({html: 'User deleted succesfully!'})
      });
    }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.userService.selectedUser = new User();
    }
  }
}
