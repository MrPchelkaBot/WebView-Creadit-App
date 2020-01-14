import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'zaimigo-modal.html',
    styleUrls: ['./zaimigo-modal.scss'],
    selector: 'zaimigo-modal'
})
export class ZaimigoModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}