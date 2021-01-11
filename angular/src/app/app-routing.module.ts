import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { LoginsGuard } from './guard/logins.guard';
import { RegistersGuard } from './guard/registers.guard';
import { UsersGuard } from './guard/users.guard';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticleComponent,
    canActivate: [UsersGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginsGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [RegistersGuard]
  },
  {
    path: 'profil',
    component: ProfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
