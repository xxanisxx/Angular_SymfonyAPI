import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  enableAlert: boolean = false

  errDeatail: any

  registerUserData = {
    email: '',
    password: '',
    confirm_password: "",
    name: '',
  };

  closeAlert() {
    return this.enableAlert = false
  }

  registerUser() {
    this.userService.registerUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res),
          this.router.navigate(['/login'])
      },
      (err) => {
        console.log(err),
          console.warn(err.error.detail),
          this.errDeatail = err.error.detail,
          this.enableAlert = true
      }
    );
  }

}
