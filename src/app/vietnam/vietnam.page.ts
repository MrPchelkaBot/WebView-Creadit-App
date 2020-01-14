import { Component, OnInit } from '@angular/core';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

@Component({
  selector: 'app-vietnam',
  templateUrl: './vietnam.page.html',
  styleUrls: ['./vietnam.page.scss'],
})
export class VietnamPage implements OnInit {

  constructor(private iab: InAppBrowser, private spinnerDialog: SpinnerDialog) { }

  ngOnInit() {
  }

  getMoney(url: string) {
    const options: InAppBrowserOptions = {
      location: 'no',
      hidenavigationbuttons: 'yes',
      hideurlbar: 'yes',
      toolbar: 'no',
      zoom: 'no',
    };
    const browser = this.iab.create(url, '_blank', options);
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
