import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  show = false
  title:any;
  description:any;
  constructor(private noteService:NoteService) { }

  ngOnInit(){
  }
  @Output() createNoteRefreshEvent = new EventEmitter<any>();

  onClick(){
    this.show = true
  }

  onClose(){
    let data={
      title:this.title,
      description:this.description
    };
  
  /*createNote(){
    let request ={
      title:'this a testing note',
      description:'this is a test description'
    }*/
    this.noteService.createNotes(data).subscribe((response:any)=>{
      console.log(response);
      this.title=null;
      this.description=null;

      this.createNoteRefreshEvent.emit(response.status.details);
      let message= response

    },error => {
      console.log(error);
    })

    this.show=false
  }
}