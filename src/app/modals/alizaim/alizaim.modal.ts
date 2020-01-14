import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'alizaim-modal.html',
    styleUrls: ['./alizaim-modal.scss'],
    selector: 'alizaim-modal'
})
export class AlizaimModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}