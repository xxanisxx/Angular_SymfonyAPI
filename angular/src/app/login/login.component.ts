import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    username: '',
    password: '',
  };

  enableAlert: boolean = false

  errDeatail: any

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  closeAlert() {
    return this.enableAlert = false
  }
  loginUser() {
    this.userService.loginUser(this.loginUserData).subscribe(
      (res: any) => {
        console.log(res),
          localStorage.setItem('token', res.token),
          localStorage.setItem('userId', res.data.userId)
          this.router.navigate(['/articles'])
      },
      (err) => {
        console.log(err),
          console.warn(err.error.detail),
          this.errDeatail = err.error.message,
          this.enableAlert = true
      }
    );
  }
}
