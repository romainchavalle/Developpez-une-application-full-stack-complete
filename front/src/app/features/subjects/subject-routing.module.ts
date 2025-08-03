import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './components/subjects-list/subjects-list.component';


const routes: Routes = [
  { path: '', title: 'Themes', component: SubjectsListComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
