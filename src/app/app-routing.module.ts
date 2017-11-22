import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateToDo } from './can-access';

import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: TodoComponent,
  canActivate: [CanActivateToDo]
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
