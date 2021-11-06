import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenUnitPage } from './token-unit.page';

const routes: Routes = [
  {
    path: '',
    component: TokenUnitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokenUnitPageRoutingModule {}
