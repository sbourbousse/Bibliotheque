import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  // Initialiser le formulaire
  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6}/)]]
    });
  }
  // Enregistrer l'utilisateur
  onSubmit() {
    // Récupérer les valeus des inputs dans le formulaire
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    // Créer le nouvel utilisateur
    this.authService.createNewUser(email, password).then(
      () => {
        // Rediriger vers books
        this.router.navigate(['/auth', 'signin']);
      },
      (error) => {
        // Afficher le message l'erreur
        this.errorMessage = error;
      }
    );
  }
}
