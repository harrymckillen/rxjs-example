import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
})
export class ForecastListComponent {
  zipcode: string;
  forecast: any;

  constructor(
    public weatherService: WeatherService,
    route: ActivatedRoute
    ) {
    route.params.subscribe((params) => {
      this.zipcode = params['zipcode'];
      weatherService
        .getForecast(this.zipcode)
        .subscribe((data) => (this.forecast = data));
    });
  }
}
