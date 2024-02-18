import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../../interfaces/post.interface';
import { User } from '../../../interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import { PostService } from '../../../services/post.service';
import posts from '../../../mock/posts.mock';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardList implements OnInit {

  users: User[] = [];
  @Input() posts: Post[] = [];
  @Input() isBasicListSelected: boolean = false;

  constructor(public userService: UserService, public postService: PostService){
    
  }
  
  ngOnInit(): void {

    if(!this.isBasicListSelected){
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
      
      this.postService.getPosts().subscribe(posts => {
        this.posts = posts;
      })
    } else {
      this.posts = posts;
    }
  }
}
