import { Component } from '@angular/core';
import { NavigateBackButtonComponent } from '../shared/navigate-back-button/navigate-back-button.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NavigateBackButtonComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
