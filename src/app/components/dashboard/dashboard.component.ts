import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditlabelComponent } from '../editlabel/editlabel.component';
import { EditlabeldialogComponent } from '../editlabeldialog/editlabeldialog.component';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 title:any;
 labelList:any;

  constructor(private noteService: NoteService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public dialog: MatDialog) {
 
  }


  ngOnInit(): void {
    this.getLabels()
    
  }
   
  openDialog() {
    const dialogRef = this.dialog.open(EditlabeldialogComponent, {
    width: '350px',
    height: '',
    });
    
  dialogRef.afterClosed().subscribe(result =>  {
   console.log('The dialog was closed',result)
    });
}

getLabels(){
  this.noteService.getLabels().subscribe(
    (response:any) => {
      console.log(response.data.details);
      console.log(response);
    this.labelList=response['data'].details  
    console.log('labelList',this.labelList)
},
error => {console.log(error);
}
  )
}
}