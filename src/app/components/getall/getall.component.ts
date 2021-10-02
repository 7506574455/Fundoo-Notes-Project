import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/noteservice/note.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.scss']
})
export class GetallComponent implements OnInit {

  NoteList=[]

  constructor(private noteService: NoteService) { }

  ngOnInit() {

    this.getAllNotes()
  }

  getAllNotes() {
 let notes= [];
    this.noteService.getAllNoteService().subscribe((response: any) => {
      console.log(response);
      notes = response.data.data;
     // notes.filter((data:any) => data.isArchived != true && data.isDeleted != true);
      this.NoteList =  notes.filter((data:any) => data.isArchived != true && data.isDeleted != true);
      console.log("NoteList",this.NoteList)
    },
      error => {
        console.log(error);

      }
    )

  }




}
