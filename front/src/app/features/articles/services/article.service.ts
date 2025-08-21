import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private pathService = 'api/articles';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.pathService);
  }

  create(article: Article): Observable<string> {
    return this.httpClient.post(this.pathService, article, {
      responseType: 'text'
    });
  }

  getArticleById(id: Number ): Observable<Article> {
    return this.httpClient.get<Article>(`${this.pathService}/${id}`)
  }

}
