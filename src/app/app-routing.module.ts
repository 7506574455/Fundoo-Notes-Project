import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { ChangepwComponent } from './changepw/changepw.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallComponent } from './components/getall/getall.component';

const routes: Routes = [
  {path:'', redirectTo:"login",pathMatch:'full'},

  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'password',component:PasswordComponent},
  {path:'changepw',component:ChangepwComponent},
  {path: 'dashboard',component:DashboardComponent,
   children:[
    {path:'', redirectTo:"login",pathMatch:'full'},
     {path:'notes',component:GetallComponent}
   ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
