import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokenUnitPageRoutingModule } from './token-unit-routing.module';

import { TokenUnitPage } from './token-unit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokenUnitPageRoutingModule
  ],
  declarations: [TokenUnitPage]
})
export class TokenUnitPageModule {}
