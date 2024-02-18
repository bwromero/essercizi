import { Component } from '@angular/core';
import posts from '../mock/posts.mock';
import { Post } from '../user/post.interface';
import { CardList } from '../shared/card/card-list.component';

@Component({
  selector: 'app-basic-list',
  standalone: true,
  imports: [CardList],
  templateUrl: './basic-list.component.html',
  styleUrl: './basic-list.component.css'
})
export class BasicListComponent {

  posts: Post[] = posts;

}
