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

    ArchiveNoteService(data:any){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      return this.httpService.PostService(this.BaseUrl + '/notes/archiveNotes',data, true, httpAuthOptions);
    //archive get 
    } 
    getAllArchiveNoteService(){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      return this.httpService.GetService(this.BaseUrl + '/notes/getArchiveNotesList', true, httpAuthOptions);
  
    }
//trash get 
   
  getTrashNoteService(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.GetService(this.BaseUrl + '/notes/getTrashNotesList', true, httpAuthOptions);

  }

//trash post
  TrashNoteService(data:any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    
    return this.httpService.PostService(this.BaseUrl + '/notes/trashNotes',data,true, httpAuthOptions);
  }

  //edit service
  createLables(data:any) : Observable<any>{
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.PostService(this.BaseUrl + '/noteLabels',data, true, httpAuthOptions);
  }
//get label
  getLabels(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.httpService.GetService(this.BaseUrl + '/noteLabels/getNoteLabelList', true, httpAuthOptions);
  }

  //delete label
  deleteLabelsService(data:any)  : Observable<any>{
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log("noteservice data",data.labelList.id);
    return this.httpService.DeleteService(this.BaseUrl + '/noteLabels/'+data.labelList.id+'/deleteNoteLabel',data, true, httpAuthOptions);
  }
  
  //update label
  updateLabelsService(data:any)  : Observable<any>{
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log("label id",data.id);
    return this.httpService.PostService(this.BaseUrl + '/noteLabels/'+data.id+'/updateNoteLabel',data, true, httpAuthOptions);
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
    updateNoteService(data:any){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      return this.httpService.PostService(this.BaseUrl + '/notes/updateNotes',data, true, httpAuthOptions);
  
    }

   

    deleteNoteService(data:any){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      return this.httpService.PostService(this.BaseUrl + '/notes/deleteForeverNotes',data, true, httpAuthOptions);
    }

    changeColorService(data:any){
      let httpAuthOptions = {
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': this.token
        })
      };
      console.log(data);
      console.log(httpAuthOptions);
      
      return this.httpService.PostService(this.BaseUrl + '/notes/changesColorNotes',data,true, httpAuthOptions);
    }

   
  }
