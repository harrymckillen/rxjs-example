import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map, filter } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
import { AddZipCode, ZipCodeActionTypes } from '../actions/zip-code.actions';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store'
import { ForecastLoaded, ForecastLoadFailed } from '../actions/forecast.actions';

@Injectable()
export class ForecastEffects {
  @Effect()
  loadForecast$: Observable<any> = this.actions$.pipe(
    ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
    filter(action => action.payload.event.url.startsWith('/forecast')),
    mergeMap(action => {
      let zipcode = action.payload.event.url.split('/').pop();
      return this.weatherService.getForecast(zipcode).pipe(
        // If successful, dispatch success action with result
        map((data) => new ForecastLoaded(data)),
        // If request fails, dispatch failed action
        catchError((err) =>
          of(new ForecastLoadFailed(zipcode, err))
        )
      )
    })
  );

  constructor(
    private actions$: Actions<AddZipCode>,
    private weatherService: WeatherService
  ) {}
}
