import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  show = false
  constructor(private noteService:NoteService) { }

  ngOnInit(){
  }
  @Output() createNoteRefreshEvent = new EventEmitter<any>();

  onClick(){
    this.show = true
  }
  createNote(){
    let request ={
      title:'this a testing note',
      description:'this is a test description'
    }
    this.noteService.createNotes(request).subscribe((response)=>{
      console.log(response);

      this.createNoteRefreshEvent.emit(response.status.details);
      let message= response

    },error => {
      console.log(error);
    })

    this.show=false
  }
}