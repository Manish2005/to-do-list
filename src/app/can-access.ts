import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CanActivateToDo implements CanActivate {
  constructor() { }

  canActivate(
  ): Observable<boolean> | Promise<boolean> | boolean {
    return !!localStorage.getItem('user');
  }
}
