import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.css'
})
export class NavigationButtonComponent {


  @Input() pageToNavigate = '';

  constructor(private router: Router) {
    
  }

  onButtonClick(){
    this.router.navigate([`/${this.pageToNavigate}`]);
  }
}
