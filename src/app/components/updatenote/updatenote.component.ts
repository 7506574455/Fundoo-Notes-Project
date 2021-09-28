import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from '../../services/noteservice/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
public title:any
public description:any

  constructor(private noteService:NoteService,

    public dialogRef: MatDialogRef<UpdatenoteComponent>,

  
      @Inject(MAT_DIALOG_DATA) public data: any) {

        console.log(data);
        this.title=data.title
        this.description=data.description
  
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    ngOnInit(): void {
    }
  
    updateNote(){
  
      let request ={
        noteId: this.data.id,
        title: this.title,
        description: this.description
      }
  
      this.noteService.updateNoteService(request).subscribe((result)=>{
        console.log(result);
        this.dialogRef.close();
        
  
  
      })
    }
  
  }