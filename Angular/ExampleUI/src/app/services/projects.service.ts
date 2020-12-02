import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private q = "Jaws";
  private path="https://api.themoviedb.org/3/search/movie?api_key=19c64f4f9f25a75eb15fb7d09a07f1a4&query=";
  constructor(private http:HttpClient) { }

  getProjects(query: any): Observable<any>{
    return this.http.get(this.path + query);
  }
}
