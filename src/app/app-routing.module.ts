import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'deep',
    loadChildren: () => import('./deep/deep.module').then( m => m.DeepPageModule)
  },
  {
    path: 'token/:tokenId/:unitId',
    loadChildren: () => import('./pages/token-unit/token-unit.module').then( m => m.TokenUnitPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
