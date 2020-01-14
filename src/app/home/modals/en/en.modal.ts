import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'en-modal.html',
    styleUrls: ['./en-modal.scss'],
    selector: 'en-modal'
})
export class ENModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}