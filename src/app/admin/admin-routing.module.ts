import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerAddBookComponent } from './add-book/container/container-add-book.component';
import { AdminComponent } from './admin.component';
import { ContainerListBookComponent } from './list-book-add/container/container-list-book.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'addBook', pathMatch: 'full' },
      { path: 'addBook', component: ContainerAddBookComponent },
      { path: 'listBook', component: ContainerListBookComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
