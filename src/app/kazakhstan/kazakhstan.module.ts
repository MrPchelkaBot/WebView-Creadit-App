import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KazakhstanPage } from './kazakhstan.page';
import { MycreditkzModal } from '../modals/mycreditkz/mycreditkz.modal';
import { MoneyManModal } from '../modals/moneyman/moneyman.modal';
import { Kredit7Modal } from '../modals/kredit7/kredit7.modal';
import { Zaymer1Modal } from '../modals/zaymer1/zaymer1.modal';
import { TurbomoneyModal } from '../modals/turbomoney/turbomoney.modal';
import { Kredit24kzModal } from '../modals/kredit24kz/kredit24kz.modal';
import { GofingoModal } from '../modals/gofingo/gofingo.modal';
import { GomoneyModal } from '../modals/gomoney/gomoney.modal';
import { DopoluchkiModal } from '../modals/dopoluchki/dopoluchki.modal';
import { DengiclickModal } from '../modals/dengiclick/dengiclick.modal';
import { T100tModal } from '../modals/100t/t100t.modal';

const routes: Routes = [
  {
    path: '',
    component: KazakhstanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KazakhstanPage,
    MycreditkzModal,
    MoneyManModal,
    Kredit7Modal,
    Zaymer1Modal,
    TurbomoneyModal,
    Kredit24kzModal,
    GofingoModal,
    GomoneyModal,
    DopoluchkiModal,
    DengiclickModal,
    T100tModal
  ],
  entryComponents: [
    MycreditkzModal,
    MoneyManModal,
    Kredit7Modal,
    Zaymer1Modal,
    TurbomoneyModal,
    Kredit24kzModal,
    GofingoModal,
    GomoneyModal,
    DopoluchkiModal,
    DengiclickModal,
    T100tModal
  ],
})
export class KazakhstanPageModule {}
