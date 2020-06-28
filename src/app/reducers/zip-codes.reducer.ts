import { Action, createReducer, on } from '@ngrx/store';
import { ZipCodeActionTypes, ZipCodeActions } from '../actions/zip-code.actions';


export interface ZipcodeState {
  zipcodes: Array<String>;
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

export function zipcodeReducer(state = initialState, action: ZipCodeActions): ZipcodeState {
  switch (action.type) {

    case ZipCodeActionTypes.AddZipCode:
      return {...state, zipcodes: [...state.zipcodes, action.zipcode]};

      case ZipCodeActionTypes.RemoveZipCode:
      return { ...state, zipcodes: state.zipcodes.filter( item => item !== action.zipcode) };

        default:
      return state;
  }
}
