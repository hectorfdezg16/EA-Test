import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//Angular CLI automatically manages the creation of components, models and services
import { UsersComponent } from './components/admin/users/users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//we add some components for WebApp
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { Page404Component } from './components/page404/page404.component';

//importamos nuestro componente de sede
import { SedeComponent } from './components/sede/sede.component';

//hemos cambiado nuestro servicio por el de sede
//import { UserService } from './services/user.service';
import { SedeService } from './services/sede.service';

//routes
import { AppRoutingModule } from './app.routing';
import { AuthorizationComponent } from './components/admin/authorization/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    SedeComponent,
    UsersComponent,
    HomeComponent,
    SignupComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SedeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
