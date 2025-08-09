import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Subject } from '../../interfaces/subject.interface';
import { Subscription } from '../../interfaces/subscription.interface';
import { SubjectService } from 'src/app/services/subject.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent {

  constructor(
    private subjectService: SubjectService,
  ) {}

  subjects$: Observable<Subject[]> = this.subjectService.all();

  toggle(subjectId: number, isSubscribed: boolean): void {
  //   const subscription: Subscription = { subjectId };

  //   if (isSubscribed) {
  //     this.subscriptionService.unsubscribe(subscription).subscribe();
  //   } else {
  //     this.subscriptionService.subscribe(subscription).subscribe();
  //   }
    console.log("bonjour")
  }
}
