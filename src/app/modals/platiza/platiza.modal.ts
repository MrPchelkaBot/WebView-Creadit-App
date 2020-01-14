import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'platiza-modal.html',
    styleUrls: ['./platiza-modal.scss'],
    selector: 'platiza-modal'
})
export class PlatizaModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}