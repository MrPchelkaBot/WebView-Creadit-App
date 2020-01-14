import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'microclad-modal.html',
    styleUrls: ['./microclad-modal.scss'],
    selector: 'microclad-modal'
})
export class MicrocladModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}