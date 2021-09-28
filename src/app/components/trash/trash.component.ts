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
  }

  getAllTrash(){
    this.noteService.getAllArchiveNote().subscribe((response:any) =>{
      console.log(response);

      this.NoteList=response.data.data;
      this.NoteList.reverse()
      console.log("noteList",this.NoteList)
    },
    error => {
      console.log(error);
    }
   )
  }
}
