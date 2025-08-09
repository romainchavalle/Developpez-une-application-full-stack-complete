import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { RegisterRequest } from '../../interfaces/registerRequest.interface';
import { SessionInformation } from 'src/app/interfaces/sessionInformation.interface';
import { SubjectService } from 'src/app/services/subject.service';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/features/subjects/interfaces/subject.interface';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent {

  public hide = true;
  public onError = false;

  public subjects$: Observable<Subject[]> = this.subjectService.getSubjectsSubscribed();


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
              private subjectService: SubjectService) {
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
