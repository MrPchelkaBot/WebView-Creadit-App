import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'ru-modal.html',
    styleUrls: ['./ru-modal.scss'],
    selector: 'ru-modal'
})
export class RUModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}