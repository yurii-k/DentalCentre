import { NgModule } from '@angular/core';

import {ProfileDoctorComponent} from "./main-page/profile-doctor/profile-doctor.component";
import {ProfilePatientComponent} from "./main-page/profile-patient/profile-patient.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'doctor-profile',
    component: ProfileDoctorComponent
  },
  {
    path: 'patient-profile',
    component: ProfilePatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
