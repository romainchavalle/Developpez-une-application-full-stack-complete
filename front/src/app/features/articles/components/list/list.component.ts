import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../interfaces/article.interface';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public articles$: Observable<Article[]> = this.articleService.all();
  

  constructor(
    private articleService: ArticleService
  ) { }

}
