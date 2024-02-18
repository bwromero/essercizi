import { Component } from '@angular/core';
import { CardList } from '../shared/card-list/card-list.component';

@Component({
  selector: 'app-moderate-list',
  standalone: true,
  imports: [CardList],
  templateUrl: './moderate-list.component.html',
  styleUrl: './moderate-list.component.css'
})
export class ModerateListComponent {

}
