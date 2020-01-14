import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'turbomoney-modal.html',
    styleUrls: ['./turbomoney-modal.scss'],
    selector: 'turbomoney-modal'
})
export class TurbomoneyModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}