import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import{map,startWith} from 'rxjs/operators'
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
//this is for a regular list of options
  options:string[] = ['Dan','Jack','Bill'];
//this is for a list of objects
  objectOptions =   [
    {name: 'Jack'},
    {name: 'Dan'},
    {name: 'Mack'},
    {name: 'Jerry'},
    {name: 'John'},
  ];
  displayFn(subject){
    return subject ? subject.name : undefined
  }
  myControl= new FormControl();
  filteredOptions:Observable<string[]>;
constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=> this._filter(value))
    )
  }
  private _filter(value:string): string[] {
    const filterValue= value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue))
  }

}
