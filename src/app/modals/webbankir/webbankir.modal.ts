import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'webbankir-modal.html',
    styleUrls: ['./webbankir-modal.scss'],
    selector: 'webbankir-modal'
})
export class WebBankirModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}