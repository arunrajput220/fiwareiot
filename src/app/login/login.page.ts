import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuCtrl:MenuController,public router: Router) {
    //this.menuCtrl.close()
    this.menuCtrl.enable(false);
   }

  ionViewWillEnter() {
   // this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }
  loginUser(){
    this.router.navigateByUrl('home')
  }

}
