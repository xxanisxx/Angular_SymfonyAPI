import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  articles: any = [];
  art: any = {
    title: "",
    content: ""
  }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.userService.getUserProfil(this.userService.getUserId()).subscribe(
      (res) => {
        console.warn(res),
        this.articles = res;
      },
      (err) => {
        console.warn(err)
      });
  }
}
