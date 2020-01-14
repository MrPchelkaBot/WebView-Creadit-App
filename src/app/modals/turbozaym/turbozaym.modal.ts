import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'turbozaym-modal.html',
    styleUrls: ['./turbozaym-modal.scss'],
    selector: 'turbozaym-modal'
})
export class TurbozaymModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}