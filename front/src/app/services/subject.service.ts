import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../features/subjects/interfaces/subject.interface';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private pathService = 'api/subjects';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Subject[]> {
    console.log("get all apelé")
    return this.httpClient.get<Subject[]>(this.pathService);
  }
}
