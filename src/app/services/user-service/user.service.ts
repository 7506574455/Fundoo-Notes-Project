import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*loginUser(req: { email: any; password: any; }) {
    throw new Error('Method not implemented.');
  }*/

  constructor( private httpService: HttpService) { }

  registerUser(reqdata:any){
    console.log(reqdata);
   return this.httpService.Post('/user/userSignUp',reqdata)
  }
  loginUser(reqdata:any){
    console.log(reqdata);
    return this.httpService.Post('/user/login',reqdata)
  }
  
  passwordUser(reqdata:any){
    console.log(reqdata);
    return this.httpService.Post('/user/reset',reqdata)
   }

  changeUser(reqdata:any){
    console.log(reqdata);
    return this.httpService.Post('/user/reset-password',reqdata)
  } 


}
