import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent, PublicHomeComponent } from './index';


const routes: Routes = [
  {
    path: '', component: PublicComponent, children:
      [
        /*  { path: '', redirectTo: 'public', pathMatch: 'full' }, */
        { path: 'public', component: PublicHomeComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
