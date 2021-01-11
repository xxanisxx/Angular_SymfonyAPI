import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  readonly APIUrl = 'http://192.168.1.112/api';
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(this.APIUrl + '/articles');
  }

  getComments(id: any){
    return this.http.get(this.APIUrl + '/articles/' + id)
  }

  postComments(id: any, content: any){
    return this.http.post(this.APIUrl + '/comments/' + id + '/comments', content)
  }
}
