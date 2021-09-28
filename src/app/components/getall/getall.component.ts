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

    this.noteService.getAllNoteService().subscribe((response: any) => {
      console.log(response);
      this.NoteList=response.data.data
      console.log("NoteList",this.NoteList)
    },
      error => {
        console.log(error);

      }
    )

  }




}
