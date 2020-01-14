import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'moneyman-modal.html',
    styleUrls: ['./moneyman-modal.scss'],
    selector: 'moneyman-modal'
})
export class MoneyManModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}