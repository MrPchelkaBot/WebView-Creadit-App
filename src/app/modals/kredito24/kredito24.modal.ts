import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'kredito24-modal.html',
    styleUrls: ['./kredito24-modal.scss'],
    selector: 'kredito24-modal'
})
export class Kredito24Modal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}