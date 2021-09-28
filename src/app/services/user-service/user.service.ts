
import { HttpHeaders } from '@angular/common/http';   
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  BaseUrl=environment.BaseUrl;
  
  /*loginUser(req: { email: any; password: any; }) {
    throw new Error('Method not implemented.');
  }*/

  constructor( private httpService: HttpService) { 
  this.token = localStorage.getItem('token')
  }

  registerUser(requestdata:any){
    let httpAuthOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
       'Authorization': this.token
      })
    };
    console.log(requestdata);
   return this.httpService.PostService(this.BaseUrl+'/user/userSignUp',requestdata,false,httpAuthOptions)
  }

  

  loginUser(requestdata:any){
    let httpAuthOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
       'Authorization': this.token
      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl+'/user/login',requestdata,false,httpAuthOptions)
  }
  
  passwordUser(requestdata:any){
    let httpAuthOptions = {
      headers: new Headers({
        'Content-Type': 'application/json',
       'Authorization': this.token
      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl+'/user/reset',requestdata,false,httpAuthOptions)
   }

  changeUser(requestdata:any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': this.token
      })
    };
    console.log(requestdata);
    return this.httpService.PostService( this.BaseUrl+'/user/reset-password',requestdata,false,httpAuthOptions)
  } 


}