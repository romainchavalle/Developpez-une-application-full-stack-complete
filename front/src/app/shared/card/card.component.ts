import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [MatCardModule, CommonModule],
})
export class CardComponent {

  constructor() { }

  @Input() title?: string;
  @Input() content?: string;
  @Input() isArticle?: boolean;
  @Input() author?: string;
  @Input() date?: Date;
  @Input() subscribed?: boolean;

  @Output() toggleSubscription = new EventEmitter<void>();
}
