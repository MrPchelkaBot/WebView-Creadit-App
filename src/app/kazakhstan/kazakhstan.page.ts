import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MycreditkzModal } from '../modals/mycreditkz/mycreditkz.modal';
import { MoneyManModal } from '../modals/moneyman/moneyman.modal';
import { Kredit7Modal } from '../modals/kredit7/kredit7.modal';
import { ZaymerModal } from '../modals/zaymer/zaymer.modal';
import { TurbomoneyModal } from '../modals/turbomoney/turbomoney.modal';
import { Kredit24kzModal } from '../modals/kredit24kz/kredit24kz.modal';
import { GofingoModal } from '../modals/gofingo/gofingo.modal';
import { GomoneyModal } from '../modals/gomoney/gomoney.modal';
import { DopoluchkiModal } from '../modals/dopoluchki/dopoluchki.modal';
import { DengiclickModal } from '../modals/dengiclick/dengiclick.modal';
import { T100tModal } from '../modals/100t/t100t.modal';

@Component({
  selector: 'app-kazakhstan',
  templateUrl: './kazakhstan.page.html',
  styleUrls: ['./kazakhstan.page.scss'],
})
export class KazakhstanPage implements OnInit {

  constructor(private iab: InAppBrowser, private modalController: ModalController, private spinnerDialog: SpinnerDialog) { }

  ngOnInit() {
  }

  async showConditions(modalName: string) {
    switch (modalName) {
      case 'MycreditkzModal': {
        const modal = await this.modalController.create({
          component: MycreditkzModal
        });
        return await modal.present();
      }
      case 'MoneyManModal': {
        const modal = await this.modalController.create({
          component: MoneyManModal
        });
        return await modal.present();
      }
      case 'Kredit7Modal': {
        const modal = await this.modalController.create({
          component: Kredit7Modal
        });
        return await modal.present();
      }
      case 'Zaymer': {
        const modal = await this.modalController.create({
          component: ZaymerModal
        });
        return await modal.present();
      }
      case 'Turbomoney': {
        const modal = await this.modalController.create({
          component: TurbomoneyModal
        });
        return await modal.present();
      }
      case 'Kredit24kz': {
        const modal = await this.modalController.create({
          component: Kredit24kzModal
        });
        return await modal.present();
      }
      case 'gofingo': {
        const modal = await this.modalController.create({
          component: GofingoModal
        });
        return await modal.present();
      }
      case 'gomoney': {
        const modal = await this.modalController.create({
          component: GomoneyModal
        });
        return await modal.present();
      }
      case 'dopoluchki': {
        const modal = await this.modalController.create({
          component: DopoluchkiModal
        });
        return await modal.present();
      }
      case 'dengiclick': {
        const modal = await this.modalController.create({
          component: DengiclickModal
        });
        return await modal.present();
      }
      case '100t': {
        const modal = await this.modalController.create({
          component: T100tModal
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
