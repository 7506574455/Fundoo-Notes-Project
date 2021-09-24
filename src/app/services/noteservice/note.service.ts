import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http-service/http.service';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  BaseUrl=environment.BaseUrl
  token:any
    constructor(private httpService:HttpService ) { 
      this.token = localStorage.getItem('token')
    }
   
    // createNote( request:any){
    //   this.httpService.Post('notes/addNotes',request)
  
    // }
  
  
    createNotes(data:any) : Observable<any>{
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      return this.httpService.PostService(this.BaseUrl + '/notes/addNotes',data, true, httpAuthOptions);
  
    }
  
  
    getAllNoteService(){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      return this.httpService.GetService(this.BaseUrl + '/notes/getNotesList', true, httpAuthOptions);
  
    }
}
