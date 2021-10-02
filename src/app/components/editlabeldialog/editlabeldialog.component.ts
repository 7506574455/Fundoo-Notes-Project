import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editlabeldialog',
  templateUrl: './editlabeldialog.component.html',
  styleUrls: ['./editlabeldialog.component.scss']
})
export class EditlabeldialogComponent implements OnInit {
  show =true;
  label:any;
  labelList:any;
  cursor:any
  notecard: any;
  constructor(private noteService: NoteService, private matSnackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getLabels()
  }
  onOpen(){
    this.show = false;
  }

  onClose(){
    this.show = true;
  }
   onCreate(){
    this.show = true;
    let data={

      label:this.label,
      isDeleted:false,
      userId:localStorage.getItem('userId')
    };

    this.noteService.createLables(data).subscribe(

      (response:any) => {
        this.label = null;
      
        this.matSnackBar.open('New label created','',{duration:2000,})
      },
      (error:any) => {
        console.log(error)
        this.matSnackBar.open('Error not created','try Again',{duration:2000,})
      }
      );
   }

   getLabels(){
    this.noteService.getLabels().subscribe((response:any) => {
        //console.log(response.data.details);
        console.log(response);
      this.labelList=response['data'].details  
      console.log('labelList',this.labelList)
  },
  error => {
    console.log(error);
  })
  }

  //delete
  deleteNoteLabel(){
    this.show = true;

    let data = {
     label:this.label,
      isDeleted: false,
      userId:localStorage.getItem('userId')
    }
    this.noteService.deleteNoteLabel(data).subscribe((response)=>{
      console.log(response);
      this.matSnackBar.open('label deleted','',{duration:2000,})
    }),
    (error:any) => {
      console.log(error);
      this.matSnackBar.open('label not deleted','',{duration:2000,})
    }
    
  }
  


}
    
  

