import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
 
  NoteList=[]

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getAllArchive();
  }
  getAllArchive(){
    this.noteService.getAllArchiveNoteService().subscribe((response:any) =>{
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
