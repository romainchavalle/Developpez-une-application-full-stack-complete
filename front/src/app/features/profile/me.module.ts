import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from './components/me.component';
import { MeRoutingModule } from './me-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { SubjectCardComponent } from 'src/app/shared/card/subject-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  declarations: [MeComponent],
  imports: [
    MeRoutingModule,
    CommonModule,
    SubjectCardComponent,
    ReactiveFormsModule,
    FormsModule,
    NavbarComponent,
    ...materialModules
  ]
})
export class MeModule { }
