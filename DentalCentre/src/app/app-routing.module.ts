import { NgModule } from '@angular/core';

import {ProfileDoctorComponent} from "./main-page/profile-doctor/profile-doctor.component";
import {ProfilePatientComponent} from "./main-page/profile-patient/profile-patient.component";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationFormComponent} from "./main-page/registration-form/registration-form.component";

const routes: Routes = [
  {
    path: 'doctor-profile',
    component: ProfileDoctorComponent
  },
  {
    path: 'patient-profile',
    component: ProfilePatientComponent
  },
  {
    path: 'registration',
    component: RegistrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
