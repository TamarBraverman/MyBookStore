import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;
  constructor(private usersService: UsersService) {
    this.user = this.usersService.checkUserLogin();
    console.log(this.user);
    this.usersService.subjectUser.subscribe(//listen to subject user
      {
        next: (v: any) => {
          this.user = v;
        }
      })
  }
  ngOnInit() {
  }
  logout()//exit from the current user
  {
    this.usersService.logout();
  }
}
