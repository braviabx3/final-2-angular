import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { BookCardsComponent } from './home/components/book-cards.component';
import { CoreModule } from '../core/core.module';
import { PrivateHomeComponent } from './home/container/private-home.component';
import { NewCardsComponent } from './cards/components/new-cards.component';
import { ContainerCardsComponent } from './cards/container/container-cards.component';






@NgModule({
  declarations: [
    PrivateComponent,
    PrivateHomeComponent,
    BookCardsComponent,
    NewCardsComponent,
    ContainerCardsComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class PrivateModule { }
