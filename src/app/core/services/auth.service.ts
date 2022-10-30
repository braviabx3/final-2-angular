import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) { }

  isLogin: boolean = false;

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    this.isLogin = true;
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    this.isLogin = false;
    return signOut(this.auth);
  }
}
