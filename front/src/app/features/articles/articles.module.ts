import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormComponent } from './components/form/form.component';
import { SubjectModule } from '../subjects/subject.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule }    from '@angular/material/select';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  FormsModule,
  MatSelectModule
];


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SubjectModule,
    ReactiveFormsModule,
    ...materialModules
  ]
})
export class ArticlesModule { }
