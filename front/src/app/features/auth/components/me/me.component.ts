import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { RegisterRequest } from '../../interfaces/registerRequest.interface';
import { SessionInformation } from 'src/app/interfaces/sessionInformation.interface';
import { SubjectService } from 'src/app/services/subject.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from 'src/app/features/subjects/interfaces/subject.interface';
import { Subscription } from 'src/app/features/subjects/interfaces/subscription.interface';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  public hide = true;
  public onError = false;

  // chargement intial de la donnée dans ce BehaviorSubject
  private subjectsSubject = new BehaviorSubject<Subject[]>([]);

  // Observable depuis le BehaviorSubject subjectsSubject
  public subjects$: Observable<Subject[]> = this.subjectsSubject.asObservable();

  // Pour comparer et mettre à jour la donnée quand on subscribe à un sujet
  private currentSubjects: Subject[] = [];

  public form = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.min(3)
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.min(3),
        Validators.max(40)
      ]
    ]
  });

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private sessionService: SessionService,
              private subjectService: SubjectService,
              private subscriptionService: SubscriptionService) {
  }


  ngOnInit(): void {
    this.loadSubjects();
  }


  loadSubjects(): void {
    this.subjectService.getSubjectsSubscribed().subscribe(subjects => {
      this.currentSubjects = subjects;
      this.subjectsSubject.next(subjects);
    });
  }

  // Call de la requete puis update du BehaviorSubject
  deleteSubscription(subjectId: number): void {
    const subscription: Subscription = { subjectId };
    this.subscriptionService.deleteSubscription(subscription).subscribe({
      next: () => {
        this.updateSubjectsList(subjectId);
      }
    });
  }

  updateSubjectsList(subjectId: number): void {
    // Filtrer pour exclure le sujet supprimé
    const updatedSubjects = this.currentSubjects.filter(subject => subject.id !== subjectId);

    this.currentSubjects = updatedSubjects;
    this.subjectsSubject.next(this.currentSubjects);
  }




  public submit(): void {
    const registerRequest = this.form.value as RegisterRequest;
    this.authService.update(registerRequest).subscribe({
        next: (response: SessionInformation) => {
          this.sessionService.updateLog(response);
          this.router.navigate(['/articles']);
        },
        error: error => this.onError = true,
      }
    );
  }

}
