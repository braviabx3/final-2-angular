import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { PrivateComponent } from './private.component';
import { PrivateHomeComponent } from './home/container/private-home.component';
import { ContainerSearchComponent } from './search/container/container-search.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'libros', component: PrivateHomeComponent },
      { path: 'search', component: ContainerSearchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
