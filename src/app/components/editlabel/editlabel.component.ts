import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog() {
    this.dialog.open(EditlabelComponent);
  }
}
  




