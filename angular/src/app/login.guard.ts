import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './service/users.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private userService: UsersService, private router: Router) { }
  canActivate(): boolean {
    if (this.userService.loggedIn()) {
      this.router.navigate(['/articles'])
      return false;
    } else {
      return true;
    }
  }

}
