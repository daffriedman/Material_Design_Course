import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }

  ngOnInit() {
  }
openSnackBar(message,action){
  //this first
  // param is just to show a message
  //the action is to add a second param
  //to allow closing the snackbar
  //cominly used to undo something
  //you add the duration to make it 
  //disappear after a given amount of time and will only
  //use the afterdismissed
  let SnackBarRef =this.snack.open(message,action,{duration:2000});

  SnackBarRef.afterDismissed().subscribe(()=>{
    console.log("in the after dismiss");
    
  });
  
  SnackBarRef.onAction().subscribe(()=>{
    console.log('in the onAction');
    
  })

}
}
