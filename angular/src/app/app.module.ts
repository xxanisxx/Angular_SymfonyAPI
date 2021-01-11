import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserGuard } from './user.guard';
import { LoginGuard } from './login.guard';
import { RegisterGuard } from './register.guard';
import { ProfilComponent } from './profil/profil.component';
import { UsersService } from './service/users.service';
import { ArticlesService } from './service/articles.service';
import { TokensInterceptorService } from './service/tokens-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    ArticlesService,
    UsersService,
    UserGuard,
    LoginGuard,
    RegisterGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokensInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
