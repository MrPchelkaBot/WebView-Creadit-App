import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'greenmoney-modal.html',
    styleUrls: ['./greenmoney-modal.scss'],
    selector: 'greenmoney-modal'
})
export class GreenMoneyModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}