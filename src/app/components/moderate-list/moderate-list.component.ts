import { Component } from '@angular/core';
import { CardList } from '../shared/card-list/card-list.component';
import { MatButtonModule } from '@angular/material/button';
import { NavigateBackButtonComponent } from '../shared/navigate-back-button/navigate-back-button.component';

@Component({
  selector: 'app-moderate-list',
  standalone: true,
  imports: [CardList, MatButtonModule, NavigateBackButtonComponent],
  templateUrl: './moderate-list.component.html',
  styleUrl: './moderate-list.component.css'
})
export class ModerateListComponent {

}
