import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'zaymer-modal.html',
    styleUrls: ['./zaymer-modal.scss'],
    selector: 'zaymer-modal'
})
export class ZaymerModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}