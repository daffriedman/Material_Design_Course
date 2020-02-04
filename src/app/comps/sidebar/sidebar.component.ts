import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
opened = false;
  constructor() { }
  //see the html with the 
  //and (closed) = "log('Closed')"
  //to get/log events with the openning
  //and closing of the sidebar
log(state){
console.log(state)
}
  ngOnInit() {
  }

}
