import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { UsersService } from './service/users.service';
import { ArticlesService } from './service/articles.service';
import { TokensInterceptorService } from './service/tokens-interceptor.service';
import { LoginsGuard } from './guard/logins.guard';
import { RegistersGuard } from './guard/registers.guard';
import { UsersGuard } from './guard/users.guard';

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokensInterceptorService,
      multi: true,
    },
    UsersGuard,
    LoginsGuard,
    RegistersGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
