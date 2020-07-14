import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectZipcodeList } from '../reducers';
import { WeatherService } from '../weather.service';
import { RemoveZipCode } from '../actions/zip-code.actions';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss'],
})
export class CurrentConditionsComponent {
  zipcodes: Array<String>;

  currentConditions: Map<string, any>;

  constructor(
    private store: Store<State>,
    public weatherService: WeatherService
  ) {
    store
      .select(selectZipcodeList)
      .subscribe(zips => this.zipcodes = zips);

    store
      .select((state) => state.currentConditions)
      .subscribe(
        (conditions) => (this.currentConditions = conditions.currentConditions)
      );
  }

  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }

  removeZip(zip: string) {
    console.log(`Remove Zip Function ${zip}`);
    this.store.dispatch(new RemoveZipCode(zip));
  }
}
