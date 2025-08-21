import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MeComponent } from '../profile/components/me.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { SubjectCardComponent } from 'src/app/shared/card/subject-card.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule,
  MatGridListModule
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent, HomeComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SubjectCardComponent,
    NavbarComponent,
    ...materialModules
  ]
})
export class AuthModule { }
