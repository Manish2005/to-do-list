import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CanActivateToDo implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = localStorage.getItem('user')

    if (!!user) {
      return !!user;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
