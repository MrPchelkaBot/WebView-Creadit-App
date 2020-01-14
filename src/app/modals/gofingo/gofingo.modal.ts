import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'gofingo-modal.html',
    styleUrls: ['./gofingo-modal.scss'],
    selector: 'gofingo-modal'
})
export class GofingoModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}