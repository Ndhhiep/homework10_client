import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article[]>(
      'https://social.runwayclub.dev/api/articles/latest'
    );
  }

  getData() {
    return this.http.get<Article[]>(
      'https://social.runwayclub.dev/api/articles/latest'
    );
}
}
