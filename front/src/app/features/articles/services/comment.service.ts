import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  private pathService = 'api/articles';

  getCommentsForArticle(articleId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.pathService}/${articleId}/comments`)
  }

  postComment(articleId: number, content: string): Observable<Comment> {
    return this.httpClient.post<Comment>(
      `${this.pathService}/${articleId}/comments`,
      content
    );
  }
}
