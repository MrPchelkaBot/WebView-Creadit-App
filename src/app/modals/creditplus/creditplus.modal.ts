import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'creditplus-modal.html',
    styleUrls: ['./creditplus-modal.scss'],
    selector: 'creditplus-modal'
})
export class CreditPlusModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}