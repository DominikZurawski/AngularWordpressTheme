import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().pipe(
      tap((data) => {
        console.log('Posts fetched:', data);
        this.posts = data; // Przypisz dane do zmiennej posts
      }),
      catchError((error) => {
        console.error('Error fetching posts:', error);
        return of([]); // Return an empty array or handle the error as needed
      })
    ).subscribe();
  }
}
