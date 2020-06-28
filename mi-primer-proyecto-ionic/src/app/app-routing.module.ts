import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
  { path: 'iconos', loadChildren: './pages/iconos/iconos.module#IconosPageModule' },
  { path: 'textos', loadChildren: './pages/textos/textos.module#TextosPageModule' },
  { path: 'notif', loadChildren: './pages/notif/notif.module#NotifPageModule' },
  { path: 'links', loadChildren: './pages/links/links.module#LinksPageModule' },
  { path: 'ajustes', loadChildren: './pages/ajustes/ajustes.module#AjustesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
