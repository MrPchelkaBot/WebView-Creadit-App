import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'glavzaim-modal.html',
    styleUrls: ['./glavzaim-modal.scss'],
    selector: 'glavzaim-modal'
})
export class GlavzaimModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}