import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navigate-back-button.component.html',
  styleUrl: './navigate-back-button.component.css'
})
export class NavigateBackButtonComponent {

  constructor(private _location: Location) {
    
  }

  onButtonClick(){
    this._location.back();
  }
}
