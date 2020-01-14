import {Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
    templateUrl: 'otlnalich-modal.html',
    styleUrls: ['./otlnalich-modal.scss'],
    selector: 'otlnalich-modal'
})
export class OtlNalichModal {

    constructor(private modalController: ModalController) {

    }

    dismissModal() {
        this.modalController.dismiss();
    }
}