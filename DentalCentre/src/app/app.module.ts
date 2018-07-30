import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationComponent } from './main-page/navigation/navigation.component';
import { ProfileDoctorComponent } from './main-page/profile-doctor/profile-doctor.component';
import { ProfilePatientComponent } from './main-page/profile-patient/profile-patient.component';
import { HomeComponent } from './main-page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationComponent,
    ProfileDoctorComponent,
    ProfilePatientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
