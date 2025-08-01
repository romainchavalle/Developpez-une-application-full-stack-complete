import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';

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
  ) {}

  ngOnInit(): void {
  }

}
