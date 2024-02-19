import { Component, OnInit } from '@angular/core';
import posts from '../../mock/posts.mock';
import { Post } from '../../interfaces/post.interface';
import { CardList } from '../shared/card-list/card-list.component';
import { MatButtonModule } from '@angular/material/button';
import { NavigationButtonComponent } from '../shared/navigation-button/navigation-button.component';

@Component({
  selector: 'app-basic-list',
  standalone: true,
  imports: [CardList, MatButtonModule, NavigationButtonComponent],
  templateUrl: './basic-list.component.html',
  styleUrl: './basic-list.component.css'
})
export class BasicListComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
