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
export class ListComponent implements OnInit {

  // declare allArticles and sortOrder on addition of the observable to sort the articles
  public articles$!: Observable<Article[]>;
  private allArticles: Article[] = [];
  public sortOrder: 'asc' | 'desc' = 'desc';

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // on init put articles into allArticles then call sort articles to sort them
    this.articleService.all().subscribe(articles => {
      this.allArticles = articles;
      this.sortArticles();
    });
  }

   goToDetail(id: number) {
    this.router.navigate(['/articles', id]);
  }

  sortArticlesByDate() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortArticles();
  }

  sortArticles() {
    this.allArticles.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    // after sorting, generate a new observable with data sorted
    this.articles$ = new Observable<Article[]>(observer => {
      observer.next(this.allArticles);
    });
  }

}
