import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RUModal } from './modals/ru/ru.modal';
import { VNModal } from './modals/vn/vn.modal';
import { ENModal } from './modals/en/en.modal';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    RUModal,
    VNModal,
    ENModal
  ],
  entryComponents: [
    RUModal,
    VNModal,
    ENModal
  ]
})
export class HomePageModule {}
