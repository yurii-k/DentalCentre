import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {

  public list = [
    {
      name: 'Ivan',
      age: '23',
      experience: '4',
      clinic: 'New Clinic'
    },
    {
      name: 'Alex',
      age: '50',
      experience: '27',
      clinic: 'Old Clinic'
    },
    {
      name: 'Tom',
      age: '44',
      experience: '7',
      clinic: 'Next Clinic'
    },
    {
      name: 'Tina',
      age: '33',
      experience: '8',
      clinic: 'Some Another Clinic'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
