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

  createSubscription(subscription: Subscription): Observable<Subscription> {
    return this.httpClient.post<Subscription>(this.pathService, subscription)
  }

}
