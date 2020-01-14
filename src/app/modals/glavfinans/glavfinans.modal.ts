import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'glavfinans-modal.html',
    styleUrls: ['./glavfinans-modal.scss'],
    selector: 'glavfinans-modal'
})
export class GlavfinansModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}