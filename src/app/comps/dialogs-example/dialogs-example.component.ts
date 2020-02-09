import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-dialogs-example',
  templateUrl: './dialogs-example.component.html',
  styleUrls: ['./dialogs-example.component.css']
})
export class DialogsExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
