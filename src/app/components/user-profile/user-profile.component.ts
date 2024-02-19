import { Component, OnInit } from '@angular/core';
import { NavigateBackButtonComponent } from '../shared/navigate-back-button/navigate-back-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NavigateBackButtonComponent, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  userId: any;
  selectedUser: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const _userId = params.get('userId');
      if(_userId !== null){
        this.userId = parseInt(_userId, 10);
      }

      this.userService.getUsers().subscribe(users => {
        this.selectedUser = users.find(user => user.id === this.userId); 
      })
    });
  }

  getUserFullAddress(): string {
    if (!this.selectedUser?.address) return '';
    const { street, suite, city, zipcode } = this.selectedUser.address;
    return `${street}, ${suite}, ${city}, ${zipcode}`;
  }

  getCompanyInfo(): string {
    if (!this.selectedUser?.company) return '';
    const { name, catchPhrase, bs } = this.selectedUser.company;
    return `${name} - ${catchPhrase} (${bs})`;
  }

}
