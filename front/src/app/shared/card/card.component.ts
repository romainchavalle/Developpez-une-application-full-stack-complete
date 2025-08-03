import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() isArticle: boolean = true;
  @Input() author?: string;
  @Input() date?: Date;

  //   @Output() subscribe = new EventEmitter<void>();
  // @Output() unsubscribe = new EventEmitter<void>();

  // onSubscribe() {
  //   this.subscribe.emit();
  // }

  // onUnsubscribe() {
  //   this.unsubscribe.emit();
  // }

}
