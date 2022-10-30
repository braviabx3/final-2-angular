import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { FooterComponent, HeaderPrivateComponent, HeaderPublicComponent } from './index';




@NgModule({
  declarations: [
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterComponent
  ]
})
export class SharedModule { }
