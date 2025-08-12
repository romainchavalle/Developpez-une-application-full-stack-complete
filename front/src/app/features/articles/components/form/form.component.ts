import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { SubjectService } from 'src/app/services/subject.service';
import { tap } from 'rxjs';
import { Subject } from 'src/app/features/subjects/interfaces/subject.interface';
import { Article } from '../../interfaces/article.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

 subjects: Subject[] = [];
 public onError = false;

  public articleForm = this.fb.group({
    title:    ['', [Validators.required]],
    content:  ['', [Validators.required]],
    subjectId:[0, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private subjectService: SubjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subjectService.all()
    .pipe(tap(list => this.subjects = list))
    .subscribe();
  }

  onSubmit(): void {
    const articleRequest = this.articleForm.value as Article;
    this.articleService.create(articleRequest).subscribe({
      next: () => {
        this.router.navigate(['/articles']);
      },
      error: error => this.onError = true,
    })
  }

  goBack(): void {
    this.router.navigate(['/articles']);
  }

}
