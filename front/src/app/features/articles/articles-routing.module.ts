import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  { path: '', title: 'Articles', component: ListComponent},
  { path: 'create', title: 'Create Article', component: CreateComponent},
  { path: ':id', title: "Article detail", component: DetailComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
