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
        this.matSnackBar.open('Change the background color','',{duration:2000,})
      },
      (error:any) => {
        this.matSnackBar.open('Error color Note','try Again',{duration:2000,})
      }
      );
   }






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
