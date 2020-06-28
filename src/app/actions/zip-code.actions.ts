import { Action } from '@ngrx/store';

export enum ZipCodeActionTypes {
  AddZipCode = '[ZipCode] Add ZipCode',
  RemoveZipCode = '[ZipCode] Remove ZipCode'
}

export class AddZipCode implements Action {

  readonly type = ZipCodeActionTypes.AddZipCode;

  constructor(public zipcode: string){}
}

export class RemoveZipCode implements Action {

  readonly type = ZipCodeActionTypes.RemoveZipCode;

  constructor(public zipcode: string){}
}

export type ZipCodeActions = AddZipCode | RemoveZipCode;
