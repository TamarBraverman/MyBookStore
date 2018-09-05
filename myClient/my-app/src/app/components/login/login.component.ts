import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  //----------------PROPERTIRS-------------------
  formGroup: FormGroup;
  user: User;
  obj: typeof Object = Object;

  //----------------CONSTRUCTOR------------------
  constructor(private usersService: UsersService) {
    let formGroupConfig = {
      userName: new FormControl("", this.createValidatorArr("name", 3, 15, /^[a-zA-Z]*$/)),
      Password: new FormControl("", this.createValidatorArr("password", 5, 10, /^[0-9a-zA-Z]*$/))
    };
    this.formGroup = new FormGroup(formGroupConfig);
  }
  ngOnInit() {
  }

  //----------------METHODS-------------------
  get f() { return this.formGroup.controls; }

  submitLogin() {//cheking if the user exist
   this.usersService.login(this.formGroup.value);

  }
  createValidatorArr(cntName: string, min: number, max: number, reg: RegExp): Array<ValidatorFn> {//create validation for controllers
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<String>f.value.match(reg) ? { "val": `${cntName} is has to be with english letters` } : null
    ];
  }

}
