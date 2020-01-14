import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 't100t-modal.html',
    styleUrls: ['./t100t-modal.scss'],
    selector: 't100t-modal'
})
export class T100tModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}