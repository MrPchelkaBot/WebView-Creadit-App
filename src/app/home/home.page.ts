import { Component, OnInit } from '@angular/core';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { RUModal } from './modals/ru/ru.modal';
import { VNModal } from './modals/vn/vn.modal';
import { ENModal } from './modals/en/en.modal';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalController: ModalController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private router: Router,
    private ngxService: NgxUiLoaderService,
    private storage: Storage) { }

  private policy: boolean;

  ngOnInit(): void {

    this.ngxService.start();
    this.storage.get('policy').then((val: boolean) => {
      if (val == null || !val) {
        this.policy = false;
      } else {
        this.policy = val;
      }
      this.getGeolocation();
    });
  }

  private getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, { useLocale: true, maxResults: 5 })
        .then(async (result) => {
          this.ngxService.stop();
          switch (result[0].countryCode) {
            case 'RU': {
              if (!this.policy) {
                const modal = await this.modalController.create({
                  component: RUModal
                });
                await modal.present();
                this.storage.set('policy', true);
              }
              return this.router.navigate(['/russia']);
            }
            case 'KZ': {
              if (!this.policy) {
                const modal = await this.modalController.create({
                  component: RUModal
                });
                await modal.present();
                this.storage.set('policy', true);
              }
              return this.router.navigate(['/kazakhstan']);
            }
            case 'LK': {
              if (!this.policy) {
                const modal = await this.modalController.create({
                  component: ENModal
                });
                await modal.present();
                this.storage.set('policy', true);
              }
              return this.router.navigate(['/shrilanka']);
            }
            case 'PL': {
              if (!this.policy) {
                const modal = await this.modalController.create({
                  component: ENModal
                });
                await modal.present();
                this.storage.set('policy', true);
              }
              return this.router.navigate(['/polsha']);
            }
            case 'PH': {
              if (!this.policy) {
                const modal = await this.modalController.create({
                  component: VNModal
                });
                await modal.present();
                this.storage.set('policy', true);
              }
              return this.router.navigate(['/filipinni']);
            }
            case 'VN': {
              if (!this.policy) {
                const modal = await this.modalController.create({
                  component: VNModal
                });
                await modal.present();
                this.storage.set('policy', true);
              }
              return this.router.navigate(['/vietnam']);
            }
            case 'UA': {
              if (!this.policy) {
                const modal = await this.modalController.create({
                  component: RUModal
                });
                await modal.present();
                this.storage.set('policy', true);
              }
              return this.router.navigate(['/ukraina']);
            }
            default: {
              this.default();
            }
          }
        })
        .catch((error: any) => {
          //[debug] alert('Error getting location' + JSON.stringify(error));
          this.default();
        });
    }).catch((error: any) => {
      //[debug] alert('Error getting location' + JSON.stringify(error));
      this.default();
    });
  }

  private async default() {
    this.ngxService.stop();
    if (!this.policy) {
      const modal = await this.modalController.create({
        component: RUModal
      });
      await modal.present();
      this.storage.set('policy', true);
    }
    return this.router.navigate(['/russia']);
  }
}
