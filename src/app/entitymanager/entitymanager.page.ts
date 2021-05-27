import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';

import {EntityinfoPage} from '../entityinfo/entityinfo.page'

@Component({
  selector: 'app-entitymanager',
  templateUrl: './entitymanager.page.html',
  styleUrls: ['./entitymanager.page.scss'],
})
export class EntitymanagerPage implements OnInit {

  data1:any=[]

  constructor(private api :RestapiService,public loadingController: LoadingController,
    public alertController: AlertController,
    public modalController: ModalController ,
    public toastController: ToastController,
    public router: Router,) {

      this.allEntities()
     }

  ngOnInit() {
  }
  logout(){
    this.router.navigateByUrl('login');
  }

  sendEntityName(val){
    EntityinfoPage.prototype.getEntityName(val)
    this.router.navigateByUrl('entityinfo')
  }
  
  async allEntities(){
    this.data1=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     message:"Loding Entities...."
    });
   await loading.present()
    await this.api.getEntity()
          .subscribe(res => { 
            console.log(res)
            for(let i=0;i<res.length;++i){
             this.data1.push(res[i])

            }
            
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }



  async createEntity() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Create Fiware IoT Entity',
      inputs: [
        {
          name: 'device_id',
          type: 'text',
          placeholder: 'Device ID'
        },
        {
          name: 'entity_name',
          type: 'text',
          id: 'name2-id',
         // value: 'hello',
          placeholder: 'Entity Name'
        },
        {
          name: 'entity_type',
          type: 'text',
          id: 'entity_type-id',
         // value: 'hello',
          placeholder: 'Entity Type'
        },
        // multiline input.
        {
          name: 'ed',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  createEntityPageroute(){
    this.router.navigateByUrl('corionentity');
  }

}
