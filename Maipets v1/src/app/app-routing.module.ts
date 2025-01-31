import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)},
  { path: 'edit', loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)},
  { path: 'edit/:id', loadChildren: './pages/edit/edit.module#EditPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
