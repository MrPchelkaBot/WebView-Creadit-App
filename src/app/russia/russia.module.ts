import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RussiaPage } from './russia.page';
import { GreenMoneyModal } from '../modals/greenmoney/greenmoney.modal';
import { JoymoneyModal } from '../modals/joymoney/joymoney.modal';
import { ZaymerModal } from '../modals/zaymer/zaymer.modal';
import { TurbozaymModal } from '../modals/turbozaym/turbozaym.modal';
import { CreditPlusModal } from '../modals/creditplus/creditplus.modal';
import { WebBankirModal } from '../modals/webbankir/webbankir.modal';
import { Kredito24Modal } from '../modals/kredito24/kredito24.modal';
import { GlavfinansModal } from '../modals/glavfinans/glavfinans.modal';
import { DayzaymModal } from '../modals/dayzaym/dayzaym.modal';
import { OtlNalichModal } from '../modals/otlnalich/otlnalich.modal';
import { AlizaimModal } from '../modals/alizaim/alizaim.modal';
import { OnlineZaimModal } from '../modals/onlinezaim/onlinezaim.modal';
import { MicrocladModal } from '../modals/microclad/microclad.modal';
import { PlatizaModal } from '../modals/platiza/platiza.modal';
import { EzaemModal } from '../modals/ezaem/ezaem.modal';
import { ZaimigoModal } from '../modals/zaimigo/zaimigo.modal';
import { WebzaimModal } from '../modals/webzaim/webzaim.modal';
import { ZaimonlineModal } from '../modals/zaimonline/zaimonline.modal';
import { MigoneModal } from '../modals/migone/migone.modal';
import { GlavzaimModal } from '../modals/glavzaim/glavzaim.modal';
import { MonezaModal } from '../modals/moneza/moneza.modal';


const routes: Routes = [
  {
    path: '',
    component: RussiaPage
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
    RussiaPage,
    GreenMoneyModal,
    JoymoneyModal,
    ZaymerModal,
    TurbozaymModal,
    CreditPlusModal,
    WebBankirModal,
    Kredito24Modal,
    GlavfinansModal,
    DayzaymModal,
    OtlNalichModal,
    AlizaimModal,
    OnlineZaimModal,
    MicrocladModal,
    PlatizaModal,
    EzaemModal,
    ZaimigoModal,
    WebzaimModal,
    ZaimonlineModal,
    MigoneModal,
    GlavzaimModal,
    MonezaModal
  ],
  entryComponents: [
    GreenMoneyModal,
    JoymoneyModal,
    ZaymerModal,
    TurbozaymModal,
    CreditPlusModal,
    WebBankirModal,
    Kredito24Modal,
    GlavfinansModal,
    DayzaymModal,
    OtlNalichModal,
    AlizaimModal,
    OnlineZaimModal,
    MicrocladModal,
    PlatizaModal,
    EzaemModal,
    ZaimigoModal,
    WebzaimModal,
    ZaimonlineModal,
    MigoneModal,
    GlavzaimModal,
    MonezaModal
  ]
})
export class RussiaPageModule {}
