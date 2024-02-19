import { Component } from '@angular/core';
import { CardList } from '../shared/card-list/card-list.component';
import { MatButtonModule } from '@angular/material/button';
import { NavigationButtonComponent } from '../shared/navigation-button/navigation-button.component';

@Component({
  selector: 'app-moderate-list',
  standalone: true,
  imports: [CardList, MatButtonModule, NavigationButtonComponent],
  templateUrl: './moderate-list.component.html',
  styleUrl: './moderate-list.component.css'
})
export class ModerateListComponent {

}
