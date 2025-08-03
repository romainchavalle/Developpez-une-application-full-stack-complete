import { Component, OnInit } from '@angular/core';
import { Subject } from '../../interfaces/subject.interface';
import { SubjectService } from 'src/app/services/subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent {


  public subjects$: Observable<Subject[]> = this.subjectService.all();

  constructor(
    private subjectService: SubjectService
  ) { }


}
