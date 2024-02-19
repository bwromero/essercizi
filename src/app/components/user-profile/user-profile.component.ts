import { Component } from '@angular/core';
import { NavigateBackButtonComponent } from '../shared/navigate-back-button/navigate-back-button.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NavigateBackButtonComponent, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
