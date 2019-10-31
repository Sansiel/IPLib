import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = `${environment.apiUrl}/api/library/book`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}`).pipe(
      map(data => data.map(item => new Book().deserialize(item)))
    );
  }

  get(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`).pipe(
      map(data => new Book().deserialize(data))
    );
  }

  create(book: Book): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}`, book);
  }

  update(book: Book): Observable<Response>  {
    return this.http.put<Response>(`${this.apiUrl}/${book.id}`, book);
  }

  delete(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.apiUrl}/${id}`);
  }
}
