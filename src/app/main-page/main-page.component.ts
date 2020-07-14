import { Component, OnInit } from '@angular/core';
import { AddZipCode } from '../actions/zip-code.actions';
import { State } from '../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private store: Store<State>) { }

  addLocation (zipcode: string){
    this.store.dispatch(new AddZipCode(zipcode));
  }

  ngOnInit(): void {
  }

}
