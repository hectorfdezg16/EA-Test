import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Sede } from '../../models/sede';

//we import all our services then we initialize them to use on providers point
import { SedeService } from '../../services/sede.service';

declare var M: any;

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css'],
  providers: [SedeService],
})
export class SedeComponent implements OnInit {

  //be careful, this constructor was private!!! --> public
  constructor(public sedeService: SedeService) { }

  //prove
  //if the app starts then we will execute getAllUsers
  ngOnInit(): void {
    this.getAllSedes();
  }

  //This is the event when we click the submit button
  addSede(form?: NgForm){

    //if id exists then we want to modify any parameter of user's entity 
    if(form.value._id){
      this.sedeService.putSede(form.value)
      .subscribe(res => {
        //console.log(res);
        this.getAllSedes();
        this.resetForm(form);
        M.toast({html: 'Sede modificada correctamente!'})
      });
    } else {

      this.sedeService.postSede(form.value)
      .subscribe(res => {
        //after we have created a new user we order all users with our function
        this.getAllSedes();
        this.resetForm(form);
        M.toast({html: 'Sede creada correctamente'})
      });
    }
  }

  getAllSedes(){
    this.sedeService.getAllSedes()
    .subscribe(res => {
      //this.userService.users = res;
      this.sedeService.sedes = res as Sede[];
      console.log(res);
    });
  }

  updateSede(sede: Sede){
    this.sedeService.selectedSede = sede;
  }
  //funcion

  deleteSede(_id: string, form: NgForm){
    if(confirm('Are you sure about this?')){
      this.sedeService.deleteSede(_id)
      .subscribe(res=>{
        this.getAllSedes();
        this.resetForm(form);
        M.toast({html: 'Sede eliminada correctamente'})
      });
    }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.sedeService.selectedSede = new Sede();
    }
  }

}
