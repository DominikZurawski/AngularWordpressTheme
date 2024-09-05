import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    // private apiUrl: string = `${window.location.origin}/wp-json/wp/v2/posts`;
    // private apiUrl: string = window.location.origin.includes(':8080') ? window.location.origin.replace(':8080', '') : `${window.location.origin}/wp-json/wp/v2/posts`;
    private apiUrl: string = 'http://192.168.56.37/wp-json/wp/v2/posts';

    // this.apiUrl = `${window.location.origin}/wp-json/wp/v2/posts`;
    // this.apiUrl = window.location.origin.includes(':8080') ? window.location.origin.replace(':8080', '') : `${window.location.origin}/wp-json/wp/v2/posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    console.log('Fetching posts from:', this.apiUrl);
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError<any[]>('getPosts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`); // log to console instead
      return of(result as T);
    };
  }
}
