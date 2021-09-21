import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  BaseUrl = environment
  /*url!: '/user/login';*/
  constructor(private http: HttpClient) { 
  
  }

  Post(reqdata:any,url:any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // 'token': token
      })
    };
    let FullUrl = this.BaseUrl + url
    return this.http.post(FullUrl,reqdata,httpAuthOptions)
  

  }
  Get(){

  }
  Update(){

  }
  Delete(){

  }


}
