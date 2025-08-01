import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { SubjectService } from 'src/app/services/subject.service';
import { tap } from 'rxjs';
import { Subject } from 'src/app/features/subjects/interfaces/subject.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

 subjects: Subject[] = [];

  public form = this.fb.group({
  title:    ['', [Validators.required]],
  content:  ['', [Validators.required]],
  subjectId:[null, Validators.required]
});

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private subjectService: SubjectService,
  ) {}

  ngOnInit(): void {
    this.subjectService.all()
    .pipe(tap(list => this.subjects = list))
    .subscribe();
  }

}
