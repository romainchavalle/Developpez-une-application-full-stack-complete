import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import { Subject } from '../../interfaces/subject.interface';
import { Subscription } from '../../interfaces/subscription.interface';
import { SubjectService } from 'src/app/services/subject.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.scss']
})
export class SubjectsListComponent implements OnInit {

  // chargement intial de la donnée dans ce BehaviorSubject
  private subjectsSubject = new BehaviorSubject<Subject[]>([]);

  // Observable depuis le BehaviorSubject subjectsSubject
  public subjects$: Observable<Subject[]> = this.subjectsSubject.asObservable();

  // Pour comparer et mettre à jour la donnée quand on subscribe à un sujet
  private currentSubjects: Subject[] = [];

  constructor(
    private subjectService: SubjectService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.loadSubjects();
  }

  // Affectation de currentSubjects et du BehaviorSubject subjectsSubject
  loadSubjects(): void {
    this.subjectService.all().subscribe(subjects => {
      this.currentSubjects = subjects;
      this.subjectsSubject.next(subjects);
    });
  }

  // Call de la requete puis update du BehaviorSubject
  createSubscription(subjectId: number): void {
    const subscription: Subscription = { subjectId };
    this.subscriptionService.createSubscription(subscription).subscribe({
      next: () => {
        this.updateSubjectState(subjectId);
      }
    });
  }

    updateSubjectState(subjectId: number): void {
    // Mettre à jour localement le sujet comme abonné
    const updatedSubjects = this.currentSubjects.map(subject => {
      if (subject.id === subjectId) {
        return { ...subject, isSubscribed: true };
      }
      return subject;
    });

    // Mettre à jour le BehaviorSubject avec la liste des sujets mise à jour
    this.currentSubjects = updatedSubjects;
    this.subjectsSubject.next(updatedSubjects);
  }
}
