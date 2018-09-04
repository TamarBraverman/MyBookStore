import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import{UsersService}from'../../../../shared/services/users.service';
import { User } from '../../../../shared/models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  //----------------PROPERTIRS-------------------
  formGroup: FormGroup;
  user:User;
  obj: typeof Object = Object;

  //----------------CONSTRUCTOR------------------
  constructor(private usersService:UsersService) {
    let formGroupConfig = {
      firstName: new FormControl("", this.createValidatorArr("firstName", 2, 15,/^[a-zA-Z]*$/)),
      lastName: new FormControl("", this.createValidatorArr("lastName", 2, 15,/^[a-zA-Z]*$/)),
      userName: new FormControl("", this.createValidatorArr("UserName", 3, 15,/^[a-zA-Z]*$/)),
      Password: new FormControl("", this.createValidatorArr("Password", 5, 10)),
    };

    this.formGroup = new FormGroup(formGroupConfig);
  }

  //----------------METHODS-------------------
  get f() { return this.formGroup.controls; }

  submitRegister() {//entering a new user
    this.user=JSON.parse(JSON.stringify(this.formGroup.value));
    this.usersService.register(this.user);
  }
  createValidatorArr(cntName: string, min: number, max: number,reg?:RegExp): Array<ValidatorFn> {//create validation for controllers
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null,
      f => f.value && !<String>f.value.match(reg)? { "val": `${cntName} is has to be with english letters` } : null
    ];
  }

}
