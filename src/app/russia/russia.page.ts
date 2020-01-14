import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser/ngx';
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

@Component({
  selector: 'app-russia',
  templateUrl: './russia.page.html',
  styleUrls: ['./russia.page.scss'],
})
export class RussiaPage implements OnInit {

  constructor(private iab: InAppBrowser, private modalController: ModalController, private spinnerDialog: SpinnerDialog) {}

  ngOnInit() {
  }

  async showConditions(modalName: string) {
    switch (modalName) {
      case 'GreenMoneyModal': {
        const modal = await this.modalController.create({
          component: GreenMoneyModal
        });
        return await modal.present();
      }
      case 'Joymoney': {
        const modal = await this.modalController.create({
          component: JoymoneyModal
        });
        return await modal.present();
      }
      case 'Zaymer': {
        const modal = await this.modalController.create({
          component: ZaymerModal
        });
        return await modal.present();
      }
      case 'TurboZaym': {
        const modal = await this.modalController.create({
          component: TurbozaymModal
        });
        return await modal.present();
      }
      case 'CreditPlus': {
        const modal = await this.modalController.create({
          component: CreditPlusModal
        });
        return await modal.present();
      }
      case 'WebBankir': {
        const modal = await this.modalController.create({
          component: WebBankirModal
        });
        return await modal.present();
      }
      case 'Kredito24': {
        const modal = await this.modalController.create({
          component: Kredito24Modal
        });
        return await modal.present();
      }
      case 'Glavfinans': {
        const modal = await this.modalController.create({
          component: GlavfinansModal
        });
        return await modal.present();
      }
      case 'Dayzaym': {
        const modal = await this.modalController.create({
          component: DayzaymModal
        });
        return await modal.present();
      }
      case 'OtlNalich': {
        const modal = await this.modalController.create({
          component: OtlNalichModal
        });
        return await modal.present();
      }
      case 'AliZaim': {
        const modal = await this.modalController.create({
          component: AlizaimModal
        });
        return await modal.present();
      }
      case 'OnlineZaim': {
        const modal = await this.modalController.create({
          component: OnlineZaimModal
        });
        return await modal.present();
      }
      case 'Microclad': {
        const modal = await this.modalController.create({
          component: MicrocladModal
        });
        return await modal.present();
      }
      case 'Platiza': {
        const modal = await this.modalController.create({
          component: PlatizaModal
        });
        return await modal.present();
      }
      case 'Ezaem': {
        const modal = await this.modalController.create({
          component: EzaemModal
        });
        return await modal.present();
      }
      case 'Zaimigo': {
        const modal = await this.modalController.create({
          component: ZaimigoModal
        });
        return await modal.present();
      }
      case 'WebZaim': {
        const modal = await this.modalController.create({
          component: WebzaimModal
        });
        return await modal.present();
      }
      case 'ZaimOnline': {
        const modal = await this.modalController.create({
          component: ZaimonlineModal
        });
        return await modal.present();
      }
      case 'Migone': {
        const modal = await this.modalController.create({
          component: MigoneModal
        });
        return await modal.present();
      }
      case 'Glavzaim': {
        const modal = await this.modalController.create({
          component: GlavzaimModal
        });
        return await modal.present();
      }
      case 'Moneza': {
        const modal = await this.modalController.create({
          component: MonezaModal
        });
        return await modal.present();
      }
    }
  }

  getMoney(url: string) {
    const options: InAppBrowserOptions = {
      location: 'no',
      hidenavigationbuttons: 'yes',
      hideurlbar: 'yes',
      toolbar: 'no',
      zoom: 'no',
    };
    const browser = this.iab.create(url, '_blank', options);
    browser.on('loadstart').subscribe((eve) => {
      this.spinnerDialog.show(null, null, true);
    }, err => {
      this.spinnerDialog.hide();
    });
    browser.on('loadstop').subscribe(() => {
      this.spinnerDialog.hide();
    }, err => {
      this.spinnerDialog.hide();
    });
    browser.on('loaderror').subscribe(() => {
      this.spinnerDialog.hide();
    }, err => {
      this.spinnerDialog.hide();
    });
    browser.on('exit').subscribe(() => {
      this.spinnerDialog.hide();
    }, err => {
      this.spinnerDialog.hide();
    });
  }

}
