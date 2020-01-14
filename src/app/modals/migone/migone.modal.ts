import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'migone-modal.html',
    styleUrls: ['./migone-modal.scss'],
    selector: 'migone-modal'
})
export class MigoneModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}