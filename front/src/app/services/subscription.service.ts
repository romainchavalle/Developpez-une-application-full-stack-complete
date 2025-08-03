import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Subscription } from '../features/subjects/interfaces/subscription.interface';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private pathService = 'api/subscriptions';

  constructor(private httpClient: HttpClient) {
  }

  // Create behavior subject for state management of subect's subscriptions
  private subscriptionsSubject = new BehaviorSubject<Subscription[]>([]);
  public userSubscriptions$ = this.subscriptionsSubject.asObservable();

  // Load user's subscription on init component
  loadUserSubscriptions() {
    this.httpClient.get<Subscription[]>(this.pathService).subscribe(subs => this.subscriptionsSubject.next(subs))
  }


  subscribe(subjectId: number): Observable<Subscription> {
    return this.httpClient.post<Subscription>(this.pathService, { subjectId })
      .pipe(
        tap(newSub => {
          const current = this.subscriptionsSubject.value;
          this.subscriptionsSubject.next([...current, newSub]);
        })
      );
  }

  unsubscribe(subjectId: number): Observable<void> {
    return this.httpClient.delete<void>(`api/subscriptions/${subjectId}`)
      .pipe(
        tap(() => {
          const current = this.subscriptionsSubject.value;
          this.subscriptionsSubject.next(current.filter(sub => sub.subjectId !== subjectId));
        })
      );
  }


}
