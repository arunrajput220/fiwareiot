import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-aboutdeveloper',
  templateUrl: './aboutdeveloper.page.html',
  styleUrls: ['./aboutdeveloper.page.scss'],
})
export class AboutdeveloperPage implements OnInit {

  constructor(private menuCtrl:MenuController,/*public inAppBrowser: InAppBrowser*/) { 
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }
  openExternalUrl(url: string) {
  /*  this.inAppBrowser.create(
      url,
     '_blank'
);*/
window.open(url);
//window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  }
}
