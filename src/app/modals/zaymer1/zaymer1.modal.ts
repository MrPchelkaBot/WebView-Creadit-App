import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'zaymer1-modal.html',
    styleUrls: ['./zaymer1-modal.scss'],
    selector: 'zaymer1-modal'
})
export class Zaymer1Modal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}