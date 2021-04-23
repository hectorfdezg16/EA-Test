import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/admin/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { AuthorizationComponent } from './components/admin/authorization/authorization.component';
import { SedeComponent } from './components/sede/sede.component';

const routes: Routes = [
    //initial route ''
    { path: '', component: HomeComponent }, // TODO: block some things (difference users & visitants)
    { path: 'admin/authorization', component: AuthorizationComponent }, // TODO: admins of the system
    { path: 'admin/backoffice', component: UsersComponent }, // users component = backoffice component
    { path: 'sede', component: SedeComponent },
    { path: 'user/signup', component: SignupComponent },
    { path: '**', component: Page404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }