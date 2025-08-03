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
export class SubjectsListComponent implements OnInit {

  public subjectsWithStatus$!: Observable<
    { subject: Subject; isSubscribed: boolean }[]
  >;

  constructor(
    private subjectService: SubjectService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    // Load user's subscriptions
    this.subscriptionService.loadUserSubscriptions();

    //Load all subjects
    const subjects$ = this.subjectService.all();

    // Check the behavior subject wich contain subscriptions
    const subs$ = this.subscriptionService.userSubscriptions$;

    // Check if we subscribed or not to each subject
    this.subjectsWithStatus$ = combineLatest([subjects$, subs$]).pipe(
      map(([subjects, subs]) =>
        subjects.map(subject => ({
          subject,
          isSubscribed: subs.some(s => s.subjectId === subject.id)
        }))
      )
    );
  }

  toggle(subjectId: number, isSubscribed: boolean): void {
    const subscription: Subscription = { subjectId };

    if (isSubscribed) {
      this.subscriptionService.unsubscribe(subscription).subscribe();
    } else {
      this.subscriptionService.subscribe(subscription).subscribe();
    }
  }
}
