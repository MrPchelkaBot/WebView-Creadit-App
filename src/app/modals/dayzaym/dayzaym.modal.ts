import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'dayzaym-modal.html',
    styleUrls: ['./dayzaym-modal.scss'],
    selector: 'dayzaym-modal'
})
export class DayzaymModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}