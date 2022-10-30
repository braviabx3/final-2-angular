import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';
import { MainNotfoundComponent } from './not-found/components/main-notfound.component';
import { NotfoundComponent } from './not-found/container/notfound.component';
import { AuthModule } from './auth';



@NgModule({
  declarations: [
    NotfoundComponent,
    MainNotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AuthModule
  ]
})
export class CoreModule { }
