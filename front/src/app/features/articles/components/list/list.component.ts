import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../interfaces/article.interface';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public articles$: Observable<Article[]> = this.articleService.all();

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }


   goToDetail(id: number) {
    this.router.navigate(['/articles', id]);
  }
}
