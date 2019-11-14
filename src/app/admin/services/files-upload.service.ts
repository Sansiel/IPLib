import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesUploadService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  upload(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.apiUrl}/api/library/upload`, formData);
  }
}