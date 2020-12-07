import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private q = "Jaws";
  private path="https://api.themoviedb.org/3/search/movie?api_key=19c64f4f9f25a75eb15fb7d09a07f1a4&query=";
  constructor(private http:HttpClient) { }

  private firstHalf = "https://api.themoviedb.org/3/movie/";
  private secondHalf = "/watch/providers?api_key=19c64f4f9f25a75eb15fb7d09a07f1a4";

  getProjects(query: any): Observable<any>{
    return this.http.get(this.path + query);
  }

  getServices(ids: any): Observable<any>{
    return this.http.get(this.firstHalf + ids + this.secondHalf);
  }

  //authorize calls the underlying api to see if the current token is valid (if it exists) and clears it if it is not.
  //returns nothing, but updates token if it is invalid
  getFavorites(email: string):Observable<any>{
    const headerDict = {
      'email': email
    };

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    //console.log("wuh");
    return this.http.get('http://localhost:3000/api/favorites', requestOptions);
  }
}
