import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.scss']
})
export class ZipcodeEntryComponent {

  @Output()
  zipAdded = new EventEmitter<string>();

}
