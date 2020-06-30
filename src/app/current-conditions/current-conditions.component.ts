import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { WeatherService } from '../weather.service';

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
      .select((state) => state.zipcodes)
      .subscribe((zips) => (this.zipcodes = zips.zipcodes));

    store
      .select((state) => state.currentConditions)
      .subscribe(
        (conditions) => (this.currentConditions = conditions.currentConditions)
      );
  }

  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }

  showForecast(zip){
    console.log(`Show Forecast Function ${zip}`);
  }

  removeZip(zip) {
    console.log(`Remove Zip Function ${zip}`);
  }
}
