import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'webzaim-modal.html',
    styleUrls: ['./webzaim-modal.scss'],
    selector: 'webzaim-modal'
})
export class WebzaimModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}