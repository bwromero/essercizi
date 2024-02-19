import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../../interfaces/post.interface';
import { User } from '../../../interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import { PostService } from '../../../services/post.service';
import posts from '../../../mock/posts.mock';
import { HttpClientModule } from '@angular/common/http';
import { SelectedListService } from '../../../services/selected-list.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule, MatButtonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardList implements OnInit {

  users: User[] = [];
  isBasicListSelected: boolean = false
  @Input() posts: Post[] = [];
  showPostDetailsCard = false;

  selectedPost: any;


  constructor(public userService: UserService,
    public postService: PostService,
    public selectedListService: SelectedListService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.isBasicListSelected = this.selectedListService.isBasicListSelected;

    if (!this.isBasicListSelected) {
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


  getInitials(post: Post): string | undefined {
    const user = this.getUserFromPost(post);
    const userName = user?.name;

    return this.getNameParts(userName);
  }

  getNameParts(userName?: string): string | undefined {
    const nameParts = userName?.split(' ');
    return nameParts?.map(part => part.charAt(0)).join('').toUpperCase();
  }

  getUserFromPost(post: Post): User | undefined {
    return this.users.find(user => post.userId = user.id);
  }

  onRedSquareClick(post: Post){
    this.selectedPost = post;
  }

  closePostDetails(){
    this.selectedPost = null;
  }

  navigateToUserProfile(post: Post){
    const selectedUser = this.getUserFromPost(post);

    this.router.navigate(['/user-profile'], { queryParams: { userId: selectedUser?.id } });
  }
}
