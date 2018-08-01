import {Component, ContentChild, ViewChild, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
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

  username = new FormControl('',  [Validators.required]) ;
  password = new FormControl('',  [Validators.required, Validators.minLength(6)]) ;

  fullName: FormControl;
  email: FormControl;
  age: FormControl;
  address: FormControl;
  phone: FormControl;
  history: FormControl;
  allergy: FormControl;

  public controlConfig = {
    username: this.username,
    password: this.password
  };

  constructor(formBuilder: FormBuilder) {
    this.userForm = formBuilder.group( this.controlConfig );
  }

  ngOnInit() {

    if (this.formMode == 'signUp') {
      this.fullName = new FormControl('',  [Validators.minLength(6)]) ;
      this.email = new FormControl('',  [Validators.email]) ;
      this.age = new FormControl('',  [Validators.pattern("[0-9]{1-3}$")]);
      this.address = new FormControl('');
      this.phone = new FormControl('', [Validators.pattern("[0-9\\+\\-\\(\\)\\ ]{6,20}$")]) ;
      this.history = new FormControl('',  [Validators.maxLength(500)]) ;
      this.allergy = new FormControl('',  [Validators.maxLength(500)]) ;

      this.userForm.addControl('fullName', this.fullName);
      this.userForm.addControl('email', this.email);
      this.userForm.addControl('age', this.age);
      this.userForm.addControl('address', this.address);
      this.userForm.addControl('phone', this.phone);
      this.userForm.addControl('history', this.history);
      this.userForm.addControl('allergy', this.allergy);
    }
  }

  onSubmitBtnClick() {
    let newUser = this.userForm;

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
