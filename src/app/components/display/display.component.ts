import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  card: any;
  color: any;
 
  constructor(public dialog: MatDialog, private noteService:NoteService,private matSnackBar:MatSnackBar) { }
  @Input() NoteArray: any;
  @Input() notecard:any;
  @Output() noteId = new EventEmitter<any>();
  
 // token_Id = localStorage.getItem('token');

  ngOnInit(){
    console.log(this.NoteArray)
  }
   
  openDialog(notecard: any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width:'400px',
     
    data: notecard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed',result );
    });
  }
 

  getNote(note:any){
   this.card=note;
 }
}
