import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedListService {

  public isBasicListSelected = false;

  constructor() { }
}
