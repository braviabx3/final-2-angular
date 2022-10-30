import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  formReg: FormGroup;
  constructor(private authService: AuthService, private router: Router) {

    /*     this.formReg = new FormGroup({
           firstName: new FormControl('', Validators.required),
           lastName: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),
          confirmPassword: new FormControl('', Validators.required)

        }) */
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    })
  }

  ngOnInit(): void { }

  onSubmit() {
    this.authService.register(this.formReg.value)
      .then(response => {
        console.log(response)
        this.router.navigate(['/login'])
      })
      .catch(error => console.log(error))
  }
}



