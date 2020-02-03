import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-module',
  templateUrl: './spinner-module.component.html',
  styleUrls: ['./spinner-module.component.css']
})
export class SpinnerModuleComponent implements OnInit {
showSpinner = false;
  constructor() { }
loadData(){
  this.showSpinner = true;
  setTimeout(() => {
    this.showSpinner=false;
  }, 5000);
}
  ngOnInit() {
  }

}
