import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  error: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user') === 'admin') {
      this.router.navigate(['']);
    }
  }

  onLoginClick() {
    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Please enter username & password';
      return false;
    }
    if (this.username !== 'admin' && this.password !== "admin") {
      this.error = "Invalid username and/or password";
      return false;
    }

    localStorage.setItem('user', this.username);
    this.router.navigate(['']);
  }

}
