import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectForecast, State } from '../reducers'

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
})
export class ForecastListComponent {
  forecast: any;

  constructor(
    private store: Store<State>,
    public weatherService: WeatherService,
    ) {
      store.select(selectForecast).subscribe((fcast) => this.forecast = fcast);
  };
}

