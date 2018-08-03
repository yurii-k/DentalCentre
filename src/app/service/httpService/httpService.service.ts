import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  patientUrl = 'assets/database/patient.json';
  dentistUrl = 'assets/database/dentist.json';


  getPatients() {
    return this.http.get(this.patientUrl);
  };

  getDentists() {
    return this.http.get(this.dentistUrl);
  }
}
