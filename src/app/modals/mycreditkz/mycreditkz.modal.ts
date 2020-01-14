import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'mycreditkz-modal.html',
    styleUrls: ['./mycreditkz-modal.scss'],
    selector: 'mycreditkz-modal'
})
export class MycreditkzModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}