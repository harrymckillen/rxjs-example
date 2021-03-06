import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { AddZipCode, ZipCodeActionTypes } from '../actions/zip-code.actions';
import { WeatherService } from '../weather.service';
import { CurrentConditionsLoaded, CurrentConditionsLoadFailed } from '../actions/current-conditions.actions';

@Injectable()
export class CurrentConditionsEffects {
  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
    ofType(ZipCodeActionTypes.AddZipCode),
    mergeMap((action) =>
      this.weatherService.loadCurrentConditions(action['zipcode']).pipe(
        // If successful, dispatch success action with result
        map((data) => new CurrentConditionsLoaded(action['zipcode'], data)),
        // If request fails, dispatch failed action
        catchError((err) =>
          of(new CurrentConditionsLoadFailed(action['zipcode'], err))
        )
      )
    )
  );

  constructor(
    private actions$: Actions<AddZipCode>,
    private weatherService: WeatherService
  ) {}
}
