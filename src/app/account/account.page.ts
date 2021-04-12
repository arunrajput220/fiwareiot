import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  users:any;


  constructor(private httpClient: HttpClient, private plt: Platform, private alertCtrl: AlertController) {

    this.users = this.httpClient.get('https://randomuser.me/api/?results=20')
    .subscribe(res => 
    res['results'])

   }

  ngOnInit() {
  }

}
