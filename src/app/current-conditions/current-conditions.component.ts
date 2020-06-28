import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { State } from '../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {

  zipcodes: Array<String>;

  constructor(
    // private weatherService: WeatherService,
    // private locationService: LocationService,
    private router: Router,
    private store: Store<State>
  ) {
    store.select( state => state.zipcodes)
      .subscribe(zips => this.zipcodes = zips.zipcodes);

  }

  ngOnInit(): void {
  }

  showForecast(zipcode: string){
    this.router.navigate(['/forecast', zipcode])
  }
}
