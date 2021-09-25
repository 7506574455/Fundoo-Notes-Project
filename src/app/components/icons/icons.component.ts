import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() notecard:any
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

  deleteNote(){
    let req={
      noteIdList: [this.notecard.id],
      isDeleted: true,
    }
    this.noteService.deleteNoteService(req).subscribe((response)=>{
      console.log(response);
    })
    console.log();
  }

}
