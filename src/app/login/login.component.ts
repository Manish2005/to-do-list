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

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user') === 'admin') {
      this.router.navigate(['']);
    }
  }

  onLoginClick() {
    if (!this.username.trim() || !this.password.trim()) {
      return false;
    }
    localStorage.setItem('user', this.username);
    this.router.navigate(['']);
  }

}
