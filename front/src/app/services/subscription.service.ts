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


//   subscribe(subscription: Subscription): Observable<Subscription> {
//     // return this.httpClient.post<Subscription>(this.pathService, subscription)
//     //   .pipe(
//     //     tap(newSub => {
//     //       const current = this.subscriptionsSubject.value;
//     //       this.subscriptionsSubject.next([...current, newSub]);
//     //     })
//     //   );
//   }

//  unsubscribe(subscription: Subscription): Observable<string> {
//     // return this.httpClient.delete(
//     //   this.pathService,
//     //   {
//     //     body: subscription,
//     //     responseType: 'text'
//     //   }
//     // ).pipe(
//     //   tap(() => {
//     //     const current = this.subscriptionsSubject.value;
//     //     this.subscriptionsSubject.next(
//     //       current.filter(sub => sub.subjectId !== subscription.subjectId)
//     //     );
//     //   })
//     // );
//   }



}
