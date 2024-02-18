import { Component, Input } from '@angular/core';
import { Post } from '../../user/post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardList {

  @Input() posts: Post[] = [];

}
