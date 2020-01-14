import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'kredit24kz-modal.html',
    styleUrls: ['./kredit24kz-modal.scss'],
    selector: 'kredit24kz-modal'
})
export class Kredit24kzModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}