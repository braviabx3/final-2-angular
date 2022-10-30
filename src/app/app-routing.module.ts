import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './core/not-found/container/notfound.component';




const routes: Routes = [

  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  { path: '', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },
  { path: '', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
