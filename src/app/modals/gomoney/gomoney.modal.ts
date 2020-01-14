import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'gomoney-modal.html',
    styleUrls: ['./gomoney-modal.scss'],
    selector: 'gomoney-modal'
})
export class GomoneyModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}