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
  constructor(private http: HttpClient) { 
  
  }

  Post(url:any,reqdata:any,){
    this.token=localStorage.getItem("token")

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': this.token
      })
    };
    let FullUrl = this.BaseUrl + url
    console.log(FullUrl)
    return this.http.post(FullUrl,reqdata)
  

  }
  Get(){

  }
  Update(){

  }
  Delete(){

  }


}
