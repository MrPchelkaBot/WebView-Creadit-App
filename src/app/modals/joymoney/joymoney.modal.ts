import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'joymoney-modal.html',
    styleUrls: ['./joymoney-modal.scss'],
    selector: 'joymoney-modal'
})
export class JoymoneyModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}