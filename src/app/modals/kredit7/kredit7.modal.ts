import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'kredit7-modal.html',
    styleUrls: ['./kredit7-modal.scss'],
    selector: 'kredit7-modal'
})
export class Kredit7Modal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}