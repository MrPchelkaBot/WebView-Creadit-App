import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'dengiclick-modal.html',
    styleUrls: ['./dengiclick-modal.scss'],
    selector: 'dengiclick-modal'
})
export class DengiclickModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}