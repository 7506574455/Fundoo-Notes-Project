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
  deleteNoteLabel(labelList:any){
   // this.show = true;
    console.log("Delete Labels");

    let data = {
     labelList:labelList,
      isDeleted: false,
     // userId:localStorage.getItem('userId')
    }
    console.log("delete label",data);
    this.noteService.deleteLabelsService(data).subscribe((response:any)=>{
      
      this.matSnackBar.open('label deleted','',{duration:2000,})
    }),
    (error:any) => {
      console.log(error);
      this.matSnackBar.open('label not deleted','',{duration:2000,})
    }
    
  }

  updateLabel(labeldata:any){
    // this.show = true;
     console.log("update Labels");
     
     let data = {
     // labelList:labelList,
      // isDeleted: false,
      id:labeldata.id,
      label:labeldata.label,
       userId:localStorage.getItem('userId')
     }
     console.log("update data",data);
     this.noteService.updateLabelsService(data).subscribe((response:any)=>{
       
       this.matSnackBar.open('label updated','',{duration:2000,})
     }),
     (error:any) => {
       console.log(error);
       this.matSnackBar.open('label not updated','',{duration:2000,})
     }
     
   }
  


}
    
  

