import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', title: 'Articles', component: ListComponent},
  { path: 'create', title: 'Create Article', component: FormComponent},
  { path: ':id', title: "Article detail", component: DetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
