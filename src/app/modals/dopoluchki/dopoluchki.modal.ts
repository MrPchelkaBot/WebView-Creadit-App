import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'dopoluchki-modal.html',
    styleUrls: ['./dopoluchki-modal.scss'],
    selector: 'dopoluchki-modal'
})
export class DopoluchkiModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}