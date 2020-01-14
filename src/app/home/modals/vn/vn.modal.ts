import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'vn-modal.html',
    styleUrls: ['./vn-modal.scss'],
    selector: 'vn-modal'
})
export class VNModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}