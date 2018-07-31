import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AngularIndexedDB} from "../../service/indexed-db.service";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  @Input() formMode: string;

  public db = new AngularIndexedDB('myDb', 1);

  userForm: FormGroup;
  username: FormControl;
  password: FormControl;

  fullName: FormControl;
  email: FormControl;
  age: FormControl;
  address: FormControl;
  phone: FormControl;
  history: FormControl;
  allergy: FormControl;


  constructor() { }

  ngOnInit() {
    this.username = new FormControl('',  [Validators.required]) ;
    this.password = new FormControl('',  [Validators.required, Validators.minLength(6)]) ;
    this.fullName = new FormControl('',  [Validators.minLength(6)]) ;
    this.email = new FormControl('',  [Validators.email]) ;
    this.age = new FormControl('',  [Validators.pattern("[0-9]{1-3}$")]);
    this.address = new FormControl('');
    this.phone = new FormControl('', [Validators.pattern("[0-9\\+\\-\\(\\)\\ ]{6,20}$")]) ;
    this.history = new FormControl('',  [Validators.maxLength(500)]) ;
    this.allergy = new FormControl('',  [Validators.maxLength(500)]) ;

    this.userForm = new FormGroup({
      username: this.username,
      password: this.password,
      fullName: this.fullName,
      email: this.email,
      age: this.age,
      address: this.address,
      phone: this.phone,
      history: this.history,
      allergy: this.allergy
    });
  }

  onSubmitBtnClick() {
    let newUser = this.userForm;
    console.log(this.userForm);

    this.db.openDatabase(1).then(() => {
      this.db.add('users',
        {
          username: newUser.value.username,
          password: newUser.value.password,
          fullName: newUser.value.fullName,
          email: newUser.value.email,
          age: newUser.value.age,
          address: newUser.value.address,
          phone: newUser.value.phone,
          history: newUser.value.history,
          allergy: newUser.value.allergy
        }
      );
    });
  }
}
