import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss'],
  imports: [MatCardModule, CommonModule, MatButtonModule],
})
export class SubjectCardComponent implements OnInit {
  currentPage!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentPage = this.router.url;
  }

  @Input() title?: string;
  @Input() content?: string;
  @Input() author?: string;
  @Input() date?: Date;
  @Input() subscribed!: boolean;

  @Output() createSubscription = new EventEmitter<void>();

}
