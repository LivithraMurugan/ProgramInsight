import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
   { path: '', redirectTo: 'LoginForm', pathMatch: 'full' },
{ path: 'LoginForm', component: LoginformComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
