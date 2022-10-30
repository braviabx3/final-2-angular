import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/index';
import { HeroImageComponent, PublicHomeComponent, PublicComponent } from './index';




@NgModule({
  declarations: [
    PublicComponent,
    PublicHomeComponent,
    HeroImageComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
