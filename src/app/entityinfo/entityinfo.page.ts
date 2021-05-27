import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Chart } from "chart.js";
import {RestapiService} from '../restapi.service'

@Component({
  selector: 'app-entityinfo',
  templateUrl: './entityinfo.page.html',
  styleUrls: ['./entityinfo.page.scss'],
})
export class EntityinfoPage implements OnInit {

  test=[{
    "id": "NorthWeatherStation",
    "type": "WeatherStation",
    "Humidity": {
        "type": "Float",
        "value": "null",
        "metadata": {}
    },
    "TimeInstant": {
        "type": "ISO8601",
        "value": " ",
        "metadata": {}
    },
    "Windspeed": {
        "type": "Float",
        "value": "null",
        "metadata": {}
    },
    "refStore": {
        "type": "Relationship",
        "value": "urn:ngsi-ld:Store:001",
        "metadata": {}
    }
}]

  


 //--------------------timer Variables---------------
 time:any;
 runTimer: any;
 displayTime: string;
 remainingTime: any;
 hasFinished: boolean;
 timeInSeconds: any;
 hasStarted: boolean;
 //


//powerbackup parameter'
powerbackupType = "full";
powerbackupmin=0;
powerbackupmax=100;
powerbackupsize=140;
powerbackupthick=10;
powerbackupValue ;

powerbackupLabel = "%";
//gaugeAppendText = " 'C";
powerbackupthresholdConfig = {
  '60': {color: 'green'},
  '40': {color: 'orange'},
  '20': {color: 'red'}
};
entities: any[];



title:string
humditydata:any
temperaturedata:any
windspeeddata:any
pressure:any
  data1: any[];

ename
attName=[]

constructor(private api :RestapiService,public loadingController: LoadingController,
  public alertController: AlertController,
  public modalController: ModalController ,
  public toastController: ToastController
  ) {

    this.allEntities(this.ename)

this.initTimer();
    this. startTimer();

 }

ngOnInit() {
  
 

}

getEntityName(val){
 
  this.ename =val
  console.log(this.ename)
 // this.allEntities(val)
}


async allEntities(val){
  this.data1=[]
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
   message:"Loding Entities...."
  });
 await loading.present()
  await this.api.getEntityinfo(val)
        .subscribe(res => { 
          console.log(res)
        
           this.data1.push(res)

          
           for(let i=0;i<Object.keys(this.data1[0]).length;++i){
             if(Object.keys(this.data1[0])[i] != 'id' ){
              if(Object.keys(this.data1[0])[i] != 'type' ){
                this.attName.push(Object.keys(this.data1[0])[i])
              }
           
             }
            
                      }
          
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
   
}



 


async presentPopover() {
  const toast = await this.toastController.create({
    message: 'This Feature is under Development',
    duration: 2000
  });
  toast.present();
}




async userDetails() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
  //  header: 'Alert',
   subHeader: 'User Details',
    message: '<b>Name : </b>Arun Rajput <br><b>Email : </b>arunrajput@gmail.com',
    buttons: ['OK']
  });

  await alert.present();
}



//-----------------------Timer-----------

initTimer() {
  // Pomodoro is usually for 25 minutes
 if (!this.timeInSeconds) { 
   this.timeInSeconds = 12000; 
 }

 this.time = this.timeInSeconds;
 this.runTimer = false;
 this.hasStarted = false;
 this.hasFinished = false;
 this.remainingTime = this.timeInSeconds;
 
 this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
}

startTimer() {
  this.runTimer = true;
 this.hasStarted = true;
 this.timerTick();
}

pauseTimer() {
 this.runTimer = false;
}

resumeTimer() {
 this.startTimer();
}

timerTick() {
 setTimeout(() => {

   if (!this.runTimer) { return; }
   this.remainingTime--;
   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
   if (this.remainingTime > 0) {
     this.timerTick();
   }
   else {
     this.hasFinished = true;
   }
 }, 1000);
}

getSecondsAsDigitalClock(inputSeconds: number) {
 var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
 var hours = Math.floor(sec_num / 3600);
 var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
 var seconds = sec_num - (hours * 3600) - (minutes * 60);
 var hoursString = '';
 var minutesString = '';
 var secondsString = '';
 hoursString = (hours < 10) ? "0" + hours : hours.toString();
 minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
 secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
 return hoursString + ':' + minutesString + ':' + secondsString;
}


}
