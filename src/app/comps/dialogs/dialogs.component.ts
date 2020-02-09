import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'
import { DialogsExampleComponent } from '../dialogs-example/dialogs-example.component';
@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    let dialogref=this.dialog.open(DialogsExampleComponent, {data: {name:'Daniel'}})
    dialogref.afterClosed().subscribe(result =>{
      console.log(`Dialog result: ${result}`);
      
    });
  }
}
