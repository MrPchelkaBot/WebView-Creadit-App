import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'zaimonline-modal.html',
    styleUrls: ['./zaimonline-modal.scss'],
    selector: 'zaimonline-modal'
})
export class ZaimonlineModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}