import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { zipcodeReducer, ZipcodeState } from './zip-codes.reducer';
import { currentConditionsReducer, CurrentConditionsState } from './current-conditions.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import { ForecastState, forecastReducer } from './forecast.reducer';

export interface State {
  zipcodes: ZipcodeState,
  currentConditions: CurrentConditionsState,
  router: RouterReducerState,
  forecast: ForecastState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: currentConditionsReducer,
  router: routerReducer,
  forecast: forecastReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectZipcodeState = (state: State) => state.zipcodes;

export const selectZipcodeList = createSelector(
  selectZipcodeState,
  (state: ZipcodeState ) => state.zipcodes);

  export const selectForecastState = (state: State) => state.forecast;

export const selectForecast = createSelector(selectForecastState,
    (state: ForecastState) => state.forecast);
