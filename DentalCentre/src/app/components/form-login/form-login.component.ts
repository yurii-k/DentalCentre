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

  configTemplate: string = 'defaultTemplate';


  // public db = new AngularIndexedDB('myDb', 1);

  userForm: FormGroup;

  username = new FormControl('',  [Validators.required]) ;
  password = new FormControl('',  [Validators.required, Validators.minLength(6)]) ;
  fullName = new FormControl('',  [Validators.minLength(6)]) ;
  email = new FormControl('',  [Validators.email]) ;
  age = new FormControl('',  [Validators.pattern("[0-9]{1-3}$")]);
  address = new FormControl('');
  phone = new FormControl('', [Validators.pattern("[0-9\\+\\-\\(\\)\\ ]{6,20}$")]) ;
  history = new FormControl('',  [Validators.maxLength(500)]) ;
  allergy = new FormControl('',  [Validators.maxLength(500)]) ;

  public controlConfig = {
    username: this.username,
    password: this.password
  }

  constructor(formBuilder: FormBuilder) {
    this.userForm = formBuilder.group( this.controlConfig );
  }

  ngOnInit() {

    // this.userDetails = new FormGroup({
    //   fullName: this.fullName,
    //   email: this.email,
    //   age: this.age,
    //   address: this.address,
    //   phone: this.phone,
    //   history: this.history,
    //   allergy: this.allergy
    // });
  }

  onSubmitBtnClick() {
    let newUser = this.userForm;
    console.log(this.userForm);

    // this.db.openDatabase(1).then(() => {
    //   this.db.add('users',
    //     {
    //       username: newUser.value.username,
    //       password: newUser.value.password,
    //       fullName: newUser.value.fullName,
    //       email: newUser.value.email,
    //       age: newUser.value.age,
    //       address: newUser.value.address,
    //       phone: newUser.value.phone,
    //       history: newUser.value.history,
    //       allergy: newUser.value.allergy
    //     }
    //   );
    // });
  }
}
