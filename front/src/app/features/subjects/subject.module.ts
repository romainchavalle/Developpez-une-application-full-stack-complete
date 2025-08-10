import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';
import { MatCardModule } from '@angular/material/card';
import { SubjectCardComponent } from 'src/app/shared/card/subject-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SubjectRoutingModule } from './subject-routing.module';


@NgModule({
  declarations: [
    SubjectsListComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    MatCardModule,
    SubjectCardComponent,
    MatGridListModule
  ]
})
export class SubjectModule { }
