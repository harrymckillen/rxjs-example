import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { State } from '../reducers'
import { AddZipCode } from '../actions/zip-code.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.scss']
})
export class ZipcodeEntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  addLocation (zipcode: string){
    this.store.dispatch(new AddZipCode(zipcode));
  }

}
