import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { Router } from '@angular/router';
import { BasicListComponent } from '../basic-list/basic-list.component';
import { ModerateListComponent } from '../moderate-list/moderate-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatRadioModule, BasicListComponent, ModerateListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router){
  }


  onModerateSelected() {
    this.router.navigate(['/basic-list']);
  }

  onBasicSelected() {
    this.router.navigate(['/moderate-list']);
  }
}
