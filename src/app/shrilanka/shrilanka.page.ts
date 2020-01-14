import { Component, OnInit } from '@angular/core';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-shrilanka',
  templateUrl: './shrilanka.page.html',
  styleUrls: ['./shrilanka.page.scss'],
})
export class ShrilankaPage implements OnInit {

  constructor(private iab: InAppBrowser, private spinnerDialog: SpinnerDialog) { }

  ngOnInit() {
    const options: InAppBrowserOptions = {
      location: 'no',
      hidenavigationbuttons: 'yes',
      hideurlbar: 'yes',
      toolbar: 'no',
      zoom: 'no',
    };
    const browser = this.iab.create('https://flusnlb.com/ErvV', '_blank', options);
    browser.on('loadstart').subscribe((eve) => {
      this.spinnerDialog.show(null, null, true);
    }, err => {
      this.spinnerDialog.hide();
    });
    browser.on('loadstop').subscribe(() => {
      this.spinnerDialog.hide();
    }, err => {
      this.spinnerDialog.hide();
    });
    browser.on('loaderror').subscribe(() => {
      this.spinnerDialog.hide();
    }, err => {
      this.spinnerDialog.hide();
    });
    browser.on('exit').subscribe(() => {
      this.spinnerDialog.hide();
    }, err => {
      this.spinnerDialog.hide();
    });
  }
}
