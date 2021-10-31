import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeepPage } from './deep.page';

const routes: Routes = [
  {
    path: '',
    component: DeepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeepPageRoutingModule {}
