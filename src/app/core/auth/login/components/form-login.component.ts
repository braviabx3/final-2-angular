import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private authService: AuthService, private router: Router) {

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }
  ngOnInit(): void { }

  onSubmit() {
    this.authService.login(this.formLogin.value)
      .then(response => { console.log(response); })
    this.router.navigate(['/private'])
      .catch(error => console.log(error))
  }
}
