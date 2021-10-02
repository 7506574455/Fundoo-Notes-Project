import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  NoteList=[]
  
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getTrash();
  }

  
  getTrash(){
    console.log("Trash Notes");
    this.noteService.getTrashNoteService().subscribe((response:any)=>{
      console.log('NoteList Trash ', response);

      this.NoteList=response.data.data;
      this.NoteList.reverse()
      console.log('noteList Trash' ,this.NoteList)

    },(error:any)=>{
      console.log(error);
      
    })
    
  }
}
