import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'ezaem-modal.html',
    styleUrls: ['./ezaem-modal.scss'],
    selector: 'ezaem-modal'
})
export class EzaemModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}