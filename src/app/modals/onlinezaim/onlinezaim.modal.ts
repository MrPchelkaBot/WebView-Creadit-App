import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'onlinezaim-modal.html',
    styleUrls: ['./onlinezaim-modal.scss'],
    selector: 'onlinezaim-modal'
})
export class OnlineZaimModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}