import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { CurrentConditionsLoaded, CurrentConditionsLoadFailed } from '../actions/current-conditions.actions'


@Injectable()
export class CurrentConditionsEffects {

  @Effect()
    loadCurrentConditions$: Observable<any> = this.actions$.pipe(


    );

  constructor(private actions$: Actions) {}

}
