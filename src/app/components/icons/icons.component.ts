import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../../services/noteservice/note.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() notecard:any
@Output() color: EventEmitter<any> = new EventEmitter();

  isArchived = false;
  isDeleted = false;
  constructor(private noteService:NoteService,private matSnackBar:MatSnackBar) { }

  ngOnInit(): void { }
  colors:Array<any> = [

    { code: '#FFFFFF', name:'White'},
    { code: '#FF6347', name:'red'},
    { code: '#800080', name:'Purple'},
    { code: '#FFFF00', name:'yellow'},
    { code: '#ADD8E6', name:'LightBlue'},
    { code: '#FF4500', name:'Orange'},
    { code: '#728FCE', name:'blue'},
    { code: '#2B65EC', name:'darkblue'},
    { code: '#D16587', name:'purple'},
    { code: '#F9A7B0', name:'pink'},
    { code: '#E2A76F', name:'brown'},
    { code: '#D3D3D3', name:'grey'},
  ];

  setColor(color: any){
    this.notecard.color = color;
    console.log('color',color);
    let data = {
      color: color,
      noteIdList: [this.notecard.id],
    }
    console.log(data);
    this.noteService.changeColorService(data).subscribe(
      (response:any)=>{ 
        // this.getNotes.emit(color)
        console.log('Response of setColour',response);
        this.matSnackBar.open('Change the color successfully','',{duration:2000,})
      },
      (error:any) => {
        this.matSnackBar.open('Color not change','try Again',{duration:2000,})
      }
      );
   }
//archive
   archive() {
    console.log("Archive note");
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: !this.isArchived,
    }
    console.log(data)
    this.noteService.ArchiveNoteService(data).subscribe((response: any) => {
      console.log('response archive', response);
      this.matSnackBar.open('archive sucessfull', '', { duration: 2000, })

    }, (error: any) => {
      this.matSnackBar.open('Error occured ', 'try Again', { duration: 2000, })
    })

  }
  //unarchive
  unarchive() {
    console.log("Archive note");
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: false,
    }
    console.log(data)
    this.noteService.ArchiveNoteService(data).subscribe((response: any) => {
      console.log('response unarchive', response);
      this.matSnackBar.open('unarchive note sucessfully', '', { duration: 2000, })

    }, (error: any) => {
      this.matSnackBar.open('Error occured unsuccessfull ', 'try Again', { duration: 2000, })
    })

  }
//trash
  trash(){
    console.log("Trash note");
    let data = {
     
      noteIdList: [this.notecard.id],
      isDeleted: !this.isDeleted,
    }
    console.log(data)
    this.noteService.TrashNoteService(data).subscribe((response:any)=>{
      console.log('response Trash', response);
      this.matSnackBar.open('Note move Bin','',{duration:2000, })
    },(error:any)=>{
      console.log(error);
      this.matSnackBar.open('Error occured ', 'try Again', { duration: 2000, })
      
    })
  }
  //restore trash note

  restoretrash(){
    console.log("Restore the trash note");
    let data = {
     
      noteIdList: [this.notecard.id],
      isDeleted: false,
    }
    console.log(data)
    this.noteService.TrashNoteService(data).subscribe((response:any)=>{
      console.log('response Trash', response);
      this.matSnackBar.open('Note Restored','',{duration:2000, })
    },(error:any)=>{
      console.log(error);
      this.matSnackBar.open('Error occured ', 'try Again', { duration: 2000, })
      
    })
  }


//delete note

  deleteNote(){
    let req={
      noteIdList: [this.notecard.id],
      isDeleted: true,
    }
    this.noteService.deleteNoteService(req).subscribe((response)=>{
      console.log(response);
    })
    console.log();
  }

}
