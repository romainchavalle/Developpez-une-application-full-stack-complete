import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthGuard } from './guards/unauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { MeComponent } from './features/profile/components/me.component';

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  {
    path: '',
    canActivate: [UnauthGuard],
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:"articles",
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path:"subjects",
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/subjects/subject.module').then(m => m.SubjectModule)
  },
  {
    path: 'me',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/profile/me.module').then(m => m.MeModule)
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
