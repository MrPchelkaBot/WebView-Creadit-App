import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'moneza-modal.html',
    styleUrls: ['./moneza-modal.scss'],
    selector: 'moneza-modal'
})
export class MonezaModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}