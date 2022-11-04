import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddBookComponent } from './add-book/components/add-book.component';
import { ContainerAddBookComponent } from './add-book/container/container-add-book.component';
import { SharedModule } from '../shared';
import { AdminComponent } from './admin.component';
import { ListBookComponent } from './list-book-add/components/list-book.component';
import { ContainerListBookComponent } from './list-book-add/container/container-list-book.component';

@NgModule({
  declarations: [AddBookComponent, ContainerAddBookComponent, AdminComponent, ListBookComponent, ContainerListBookComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
