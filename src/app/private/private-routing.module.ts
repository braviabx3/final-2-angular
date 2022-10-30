import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


import { PrivateComponent } from './private.component';
import { PrivateHomeComponent } from './home/container/private-home.component';
import { ContainerCardsComponent } from './cards/container/container-cards.component';


const routes: Routes = [
  {
    path: '', component: PrivateComponent, children:
      [
        { path: '', redirectTo: 'private', pathMatch: 'full' },
        { path: 'private', component: PrivateHomeComponent },
        { path: 'search', component: ContainerCardsComponent }
        /* { path: '', redirectTo: 'private', pathMatch: 'full' }, */
        /*  {
           path: 'private', component: PrivateHomeComponent, ...canActivate(() =>
             redirectUnauthorizedTo(['/register']))
         } */
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
