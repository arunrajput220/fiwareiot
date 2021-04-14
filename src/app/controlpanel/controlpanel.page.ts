import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import {RestapiService} from '../restapi.service'

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.page.html',
  styleUrls: ['./controlpanel.page.scss'],
})
export class ControlpanelPage implements OnInit {
  location = 'seattle'
  fandisplay:any;
  fanstatus:any;

  juicerdisplay:any;
  juicerstatus:any;

  lightsdisplay:any;
  lightsstatus:any;

  microwaveovendisplay:any;
  microwaveovenstatus:any;

  refrigratordisplay:any;
  refrigratorstatus:any;

  speakerdisplay:any;
  speakerstatus:any;

  toasterdisplay:any
  toasterstatus:any;



  constructor(public loadingController: LoadingController,
    public toastController: ToastController,
    
    public api: RestapiService,
    public alertController: AlertController) { 
      this.Initization();
    }

  ngOnInit() {
  }


  async Initization(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
   await loading.present()
    await this.api.getGkitchenFanStatus()
          .subscribe(res => { 
       this.getFanStatus();
       this.getSpeakerStatus();
       this.getRefrigratorStatus();
       this.getToasterStatus();
       this.getJuicerStatus();
       this.getLightsStatus();
       this.getMicrowaveOvenStatus();
      
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1200
    });
    toast.present();
  }



   //------------------------Speaker------------------------------

  
   async getSpeakerStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
    await this.api.getGkitchenSpeakerStatus()
          .subscribe(res => {
        console.log(res);
       this.speakerstatus=res  
       this.setSpeakerValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  setSpeakerValue(){
    if (this.speakerstatus==1){
this.speakerdisplay="ON"
    }
    else if(this.speakerstatus==0){
      this.speakerdisplay="OFF"
    }
    else{
      this.speakerdisplay="Error"
    }
  }



  async setSpeakerStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
  if(this.speakerstatus==true){
    this.presentToast("Turning ON   Speaker")
  }
  else if(this.speakerstatus==false){
    this.presentToast("Turning OFF  Speaker")
  }
  else{
    this.presentToast("Getting Error");
  }
    await this.api.setGkitchenSpeakerStatus(this.speakerstatus)
          .subscribe(res => {
        console.log(res);
       this.speakerstatus=res  
       this.setSpeakerValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

   //-------------------------------Fan----------------

   async getFanStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
    await this.api.getGkitchenFanStatus()
          .subscribe(res => {
        console.log(res);
       this.fanstatus=res  
       this.setFanValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  setFanValue(){
    if (this.fanstatus==1){
this.fandisplay="ON"
    }
    else if(this.fanstatus==0){
      this.fandisplay="OFF"
    }
    else{
      this.fandisplay="Error"
    }
  }



  async setFanStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
  if(this.fanstatus==true){
    this.presentToast("Turning ON    Fan")
  }
  else if(this.fanstatus==false){
    this.presentToast("Turning OFF   Fan")
  }
  else{
    this.presentToast("Getting Error");
  }
    await this.api.setGkitchenFanStatus(this.fanstatus)
          .subscribe(res => {
        console.log(res);
       this.fanstatus=res  
       this.setFanValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  } 

  
   //-------------------------------Juicer----------------

   async getJuicerStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
    await this.api.getGkitchenJuicerStatus()
          .subscribe(res => {
        console.log(res);
       this.juicerstatus=res  
       this.setJuicerValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  setJuicerValue(){
    if (this.juicerstatus==1){
this.juicerdisplay="ON"
    }
    else if(this.juicerstatus==0){
      this.juicerdisplay="OFF"
    }
    else{
      this.juicerdisplay="Error"
    }
  }



  async setJuicerStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
  if(this.juicerstatus==true){
    this.presentToast("Turning ON   Juicer")
  }
  else if(this.juicerstatus==false){
    this.presentToast("Turning OFF   Juicer")
  }
  else{
    this.presentToast("Getting Error");
  }
    await this.api.setGkitchenJuicerStatus(this.juicerstatus)
          .subscribe(res => {
        console.log(res);
       this.juicerstatus=res  
       this.setJuicerValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  } 

  
   //-------------------------------microwaveoven----------------

   async getMicrowaveOvenStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
    await this.api.getGkitchenMicrowaveOvenStatus()
          .subscribe(res => {
        console.log(res);
       this.microwaveovenstatus=res  
       this.setMicrowaveOvenValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  setMicrowaveOvenValue(){
    if (this.microwaveovenstatus==1){
this.microwaveovendisplay="ON"
    }
    else if(this.microwaveovenstatus==0){
      this.microwaveovendisplay="OFF"
    }
    else{
      this.microwaveovendisplay="Error"
    }
  }



  async setMicrowaveOvenStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
  if(this.microwaveovenstatus==true){
    this.presentToast("Turning ON    Microwave Oven")
  }
  else if(this.microwaveovenstatus==false){
    this.presentToast("Turning OFF   Microwave Oven")
  }
  else{
    this.presentToast("Getting Error");
  }
    await this.api.setGkitchenMicrowaveOvenStatus(this.microwaveovenstatus)
          .subscribe(res => {
        console.log(res);
       this.microwaveovenstatus=res  
       this.setMicrowaveOvenValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  } 


  
   //-------------------------------refrigrator----------------

   async getRefrigratorStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
    await this.api.getGkitchenRefrigratorStatus()
          .subscribe(res => {
        console.log(res);
       this.refrigratorstatus=res  
       this.setRefrigratorValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  setRefrigratorValue(){
    if (this.refrigratorstatus==1){
this.refrigratordisplay="ON"
    }
    else if(this.refrigratorstatus==0){
      this.refrigratordisplay="OFF"
    }
    else{
      this.refrigratordisplay="Error"
    }
  }



  async setRefrigratorStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
  if(this.refrigratorstatus==true){
    this.presentToast("Turning ON    Refrigrator")
  }
  else if(this.refrigratorstatus==false){
    this.presentToast("Turning OFF   Refrigrator")
  }
  else{
    this.presentToast("Getting Error");
  }
    await this.api.setGkitchenRefrigratorStatus(this.refrigratorstatus)
          .subscribe(res => {
        console.log(res);
       this.refrigratorstatus=res  
       this.setRefrigratorValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  } 

  
   //-------------------------------toaster----------------

   async getToasterStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
    await this.api.getGkitchenToasterStatus()
          .subscribe(res => {
        console.log(res);
       this.toasterstatus=res  
       this.setToasterValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  setToasterValue(){
    if (this.toasterstatus==1){
this.toasterdisplay="ON"
    }
    else if(this.toasterstatus==0){
      this.toasterdisplay="OFF"
    }
    else{
      this.toasterdisplay="Error"
    }
  }



  async setToasterStatus(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
  if(this.toasterstatus==true){
    this.presentToast("Turning ON    Toaster")
  }
  else if(this.toasterstatus==false){
    this.presentToast("Turning OFF   Toaster")
  }
  else{
    this.presentToast("Getting Error");
  }
    await this.api.setGkitchenToasterStatus(this.toasterstatus)
          .subscribe(res => {
        console.log(res);
       this.toasterstatus=res  
       this.setToasterValue();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  } 

//------------------------Lights------------------------------

  
async getLightsStatus(){
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Loading....'
  });
//  await loading.present();
  await this.api.getGkitchenLightsStatus()
        .subscribe(res => {
      console.log(res);
     this.lightsstatus=res  
     this.setLightsValue();
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
   
}

setLightsValue(){
  if (this.lightsstatus==1){
this.lightsdisplay="ON"
  }
  else if(this.lightsstatus==0){
    this.lightsdisplay="OFF"
  }
  else{
    this.lightsdisplay="Error"
  }
}



async setLightsStatus(){
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Loading....'
  });
//  await loading.present();
if(this.lightsstatus==true){
  this.presentToast("Turning ON    Lights")
}
else if(this.lightsstatus==false){
  this.presentToast("Turning OFF   Lights")
}
else{
  this.presentToast("Getting Error");
}
  await this.api.setGkitchenLightsStatus(this.lightsstatus)
        .subscribe(res => {
      console.log(res);
     this.lightsstatus=res  
     this.setLightsValue();
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
   
}
}