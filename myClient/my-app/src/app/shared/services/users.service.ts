import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { User } from '../models/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User;
  subjectUser = new Subject();
  constructor(private router: Router, private httpClient: HttpClient) {
    this.user = null;
  }


  login(user) {//accses to the server in order to check if the usee excist
    this.httpClient.post("https://fierce-bayou-85627.herokuapp.com/api/login/", JSON.parse(JSON.stringify(user))).subscribe(res => {
      user = JSON.stringify(res);
      localStorage.setItem('user', user);
      this.subjectUser.next(this.checkUserLogin());
      this.router.navigate(["/BookStore/home"]);
    }, err => {
      this.router.navigate(["/BookStore/account/register"]);

    });

  }
  register(user) {//accses to the server in order to regist the user
    this.httpClient.post("https://fierce-bayou-85627.herokuapp.com/api/register/", user).subscribe(res => {
      alert("your details enter");
      this.router.navigate(["/BookStore/account/login"]);
    }, req => { alert("there is a mistake in the system") });
  }
  logout() {//delete from localstorage
    localStorage.clear();
    this.subjectUser.next(this.checkUserLogin());
  }
  checkUserLogin(): User {
     if (localStorage.getItem('user'))
      return JSON.parse(localStorage.getItem('user'))
  }
}
