import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [MatCardModule, CommonModule, MatButtonModule],
})
export class CardComponent {

  constructor() { }

  @Input() title?: string;
  @Input() content?: string;
  @Input() isArticle?: boolean;
  @Input() author?: string;
  @Input() date?: Date;
  @Input() subscribed!: boolean;

  @Output() toggleSubscription = new EventEmitter<void>();
  @Output() select = new EventEmitter<void>();

  onCardClick() {
    if (this.isArticle) {
      this.select.emit();
    }
  }
}
