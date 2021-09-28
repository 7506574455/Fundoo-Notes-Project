 
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  BaseUrl = environment.BaseUrl
  token:any
  /*url!: '/user/login';*/
  constructor(private http: HttpClient) { }
  
  PostService( url: string= '' , payload: any, tokenRequired:boolean=false, httpOption:any){

    return this.http.post(url,payload,tokenRequired && httpOption);

  }
 /* Post(url:any,reqdata:any,){
    this.token=localStorage.getItem("token")

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': this.token
      })
    };
    let FullUrl = this.BaseUrl + url
    console.log(FullUrl)
    return this.http.post(FullUrl,reqdata,httpAuthOptions)
  

  }*/
 
  GetService( url: string= '' , tokenRequired:boolean=false, httpOption:any){

    return this.http.get(url,tokenRequired && httpOption);

  }
  
  PutService( url: string= '' , tokenRequired:boolean=false, httpOption:any){

    return this.http.put(url,tokenRequired && httpOption);

  }
 // Update(){

 // }
 // Delete(){

  //}


}
