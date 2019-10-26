import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Author} from '../../books/models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = `${environment.apiUrl}/library/author`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}`).pipe(
      map(data => data.map(item => new Author().deserialize(item)))
    );
  }

  get(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.apiUrl}/${id}`).pipe(
      map(data => new Author().deserialize(data))
    );
  }

  create(author: Author): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}`, author);
  }

  update(author: Author): Observable<Response>  {
    return this.http.put<Response>(`${this.apiUrl}/${author.id}`, author);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.apiUrl}/${id}`);
  }
}
