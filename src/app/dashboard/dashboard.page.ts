import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { Chart } from "chart.js";
import {RestapiService} from '../restapi.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('airqualitygraph') private airqualitygraph: ElementRef;
  @ViewChild('humiditygraph') private humiditygraph: ElementRef;
  @ViewChild('windspeedgraph') private windspeedgraph: ElementRef;


 
  lineChart: any;
  airqualitychart:any;
  windspeedchart:any;
  humiditychart : any;
  alertcount:number= 0
  alertarr:any=[];


   //--------------------timer Variables---------------
   time:any;
   runTimer: any;
   displayTime: string;
   remainingTime: any;
   hasFinished: boolean;
   timeInSeconds: any;
   hasStarted: boolean;
   //

//Air Quality Variables
airgaugeType = "arch";
airmin=0;
airmax=1000;
airsize=140;
airthick=10;
airgaugeValue ;
 
airgaugeLabel = "ppm";
  //gaugeAppendText = " 'C";
  airthresholdConfig = {
    '100': {color: 'green'},
    '350': {color: 'orange'},
    '400': {color: 'red'}
};


//waterTank parameter'
watertankType = "arch";
watertankmin=0;
watertankmax=100;
watertanksize=140;
watertankthick=10;
watertankValue ;
 
watertankLabel = "Celcius";
  //gaugeAppendText = " 'C";
  thresholdConfig = {
    '16': {color: 'green'},
    '32': {color: 'orange'},
    '50': {color: 'red'}
};


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

  tempdata=[]
  temptime=[]

  airqdata=[]
  airqtime=[]

  humiddata=[]
  humidtime=[]

  winddata=[]
  windtime=[]

 title:string
 humditydata:any
 temperaturedata:any
 windspeeddata:any
 pressure:any


 cygnustime:any=[];
 cygnusvalus:any=[];

  

  constructor(private api :RestapiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public modalController: ModalController ,
    public toastController: ToastController,
    public router: Router
    ) {
//this.lineChartMethod()
this.Initization()
//this.Initization1()


this.initTimer();
      this. startTimer();
this.fix()
   }

  ngOnInit() {
    
   
  
  }


  getval(data){
    console.log(data)
  }
 
  logout(){
    this.router.navigateByUrl('login');
  }

  async presentPopover() {
    const toast = await this.toastController.create({
      message: 'This Feature is under Development',
      duration: 2000
    });
    toast.present();
  }

  async alertmsg() {
    let itemsList = ``;
    this.alertarr.map((item)=>{
      itemsList += `<li>${item}</li>`
   })
   
   let message = `<ul>${itemsList }</ul>`;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
    // subHeader: 'Subtitle',
      message: message,
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          this.alertarr=[]
          this.alertcount = this.alertarr.length;
        }
      }]
    });

    await alert.present();
  }
  fix(){
    setInterval( ()=>{
      this.Initizationonce();
    },5000)  
   }
  async Initizationonce(){
    this.entities=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Data....'
    });
  // await loading.present()
    await this.api.getNorthWeatherStationfromnodeserver()
          .subscribe(res => { 
              console.log(res)
              let check = res.id
              this.title = check.slice(12,32)
              this.humditydata = res.Humidity.value;
            // console.log("Humidity : ",this.humditydata)          
              this.watertankValue =res.Temperature.value;
          // console.log("Temperature : ",this.watertankValue)
            this.windspeeddata = res.WindSpeed.value;
           this.airgaugeValue = res["Air Quality"].value;
           this.pressure =res.Pressure.value;
           this.powerbackupValue =res.Power.value;
           console.log("Power value : "+ this.powerbackupValue)
          // console.log("Windspeed : ",this.windspeeddata)
          if ( this.watertankValue >= 30){
            if (this.alertarr[this.alertarr.length -1]!="Temp : "+this.watertankValue+ " at : "+(res.Temperature.metadata.TimeInstant.value).slice(11, 19)){
            this.alertarr.push("Temp : "+this.watertankValue+ " at : "+(res.Temperature.metadata.TimeInstant.value).slice(11, 19))
            this.alertcount = this.alertarr.length;    
            console.log(this.alertarr) 
            }     
          }
         

          this.cygnusTemperature()
          this.cygnusHumidity()
          this.cygnusAirQuality()
          this.cygnusWindSpeed()

         
           // for(let i=0;i<res.count;++i){
            //  console.log(res.devices[i]['device_id'])
         //   this.entities.push(res.devices[i]['device_id'])
         //   }
           
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  
  async Initization(){
    this.entities=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Data....'
    });
 //  await loading.present()
    await this.api.getNorthWeatherStationfromnodeserver()
          .subscribe(res => { 
            console.log(res)
            let check = res.id
            this.title = check.slice(12,32)
           
           this.humditydata = res.Humidity.value;
          // console.log("Humidity : ",this.humditydata)          
            this.watertankValue =res.Temperature.value;
          // console.log("Temperature : ",this.watertankValue)
           this.windspeeddata = res.WindSpeed.value;
           this.airgaugeValue = res["Air Quality"].value;
           this.pressure =res.Pressure.value;
           this.powerbackupValue =res.Power.value;
          // console.log("Windspeed : ",this.windspeeddata)
           this.cygnusTemperature()
           this.cygnusHumidity()
           this.cygnusAirQuality()
           this.cygnusWindSpeed()
         
           if ( this.watertankValue >= 30){
            this.alertarr.push("Temp : "+this.watertankValue+ " at : "+(res.Temperature.metadata.TimeInstant.value).slice(11, 19))
            this.alertcount = this.alertarr.length;              
            console.log(this.alertarr )  
          }
         
         
           // for(let i=0;i<res.count;++i){
            //  console.log(res.devices[i]['device_id'])
         //   this.entities.push(res.devices[i]['device_id'])
         //   }
           
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    
  }

  
  async cygnusHumidity(){
    this.humidtime=[]
    this.humiddata=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     
    });
   //await loading.present()
    await this.api.getHumidityNorthWeatherStationCgynusHistoricdatafromnodeserver()
          .subscribe(res => { 
            for(let i=0;i<res.length;++i){
              this.humidtime.push((res[i].recvTime).slice(11.16))
              this.humiddata.push(res[i].attrValue)

            }
            this.humdityChartMethod();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

  
  async cygnusWindSpeed(){
    this.windtime=[]
    this.winddata=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     
    });
   //await loading.present()
    await this.api.getWindSpeedNorthWeatherStationCgynusHistoricdatafromnodeserver()
          .subscribe(res => { 
            for(let i=0;i<res.length;++i){
              this.windtime.push((res[i].recvTime).slice(11.16))
              this.winddata.push(res[i].attrValue)

            }
            this.windspeedChartMethod()
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }




  async cygnusAirQuality(){
    this.airqtime=[]
    this.airqdata=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     
    });
   //await loading.present()
    await this.api.getAirQualityNorthWeatherStationCgynusHistoricdatafromnodeserver()
          .subscribe(res => { 
            for(let i=0;i<res.length;++i){
              this.airqtime.push((res[i].recvTime).slice(11.16))
              this.airqdata.push(res[i].attrValue)

            }
            this.airqualityChartMethod();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
      
     
    
  }


  async cygnusTemperature(){
    this.temptime=[]
    this.tempdata=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     
    });
   //await loading.present()
    await this.api.getTemperatureNorthWeatherStationCgynusHistoricdatafromnodeserver()
          .subscribe(res => { 
            for(let i=0;i<res.length;++i){
              this.temptime.push((res[i].recvTime).slice(11.16))
              this.tempdata.push(res[i].attrValue)

            }
            this.lineChartMethod();
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

      
    
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
  async Initization1(){
    this.entities=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Entities....'
    });
   await loading.present()
    await this.api.getNorthWeatherStation()
          .subscribe(res => { 
            console.log(res)
            
           // for(let i=0;i<res.count;++i){
            //  console.log(res.devices[i]['device_id'])
         //   this.entities.push(res.devices[i]['device_id'])
         //   }
           
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }


  airqualityChartMethod() {
    this.airqualitychart = new Chart(this.airqualitygraph.nativeElement, {
      type: 'line',
      data: {
        labels:this.airqtime,
        datasets: [
          {
            label: 'Air Quality (ppm)',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.airqdata,
            spanGaps: false,
          }
        ]
      }
    });
  }





  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels:this.temptime,
        datasets: [
          {
            label: 'Temperature(Celcius)',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.tempdata,
            spanGaps: false,
          }
        ]
      }
    });
  }
//---------------------------------------------humdity graph---------------



humdityChartMethod() {
  this.humiditychart = new Chart(this.humiditygraph.nativeElement, {
    type: 'line',
    data: {
      labels:this.humidtime,
      datasets: [
        {
          label: 'Air Quality (ppm)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.humiddata,
          spanGaps: false,
        }
      ]
    }
  });
}







windspeedChartMethod() {
  this.windspeedchart = new Chart(this.windspeedgraph.nativeElement, {
    type: 'line',
    data: {
      labels:this.windtime ,
      datasets: [
        {
          label: 'Air Quality (ppm)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.winddata,
          spanGaps: false,
        }
      ]
    }
  });
}






//---------------------


  /*

  async getTemperatureThingspeak(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
    await this.api.getDataValue()
      .subscribe(res => {
     
        if(this.timestore[this.timestore.length-1]!=(res.feeds[0].created_at).slice(11, 19)){
         //
          console.log("not eqaComparing : ",this.timestore[this.timestore.length-1]," :: ",this.timestore[this.timestore.length-2])
          this.datastore.push(res.feeds[0].field1)
          this.timestore.push((res.feeds[0].created_at).slice(11, 19))
          this.temperaturelinechart();
        }
         if(this.datastore.length == 6)
        {
          this.datastore.splice(0, 1)
          this.timestore.splice(0, 1)
          this.temperaturelinechart();
        } 

        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

   async plotTemperatureThingspeakOnce(){
 //    console.log("once run function")
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading....'
    });
  //  await loading.present();
    await this.api.getDataValue()
      .subscribe(res => {
      
     
          this.datastore.push(res.feeds[0].field1)
          this.timestore.push((res.feeds[0].created_at).slice(11, 19))
          this.temperaturelinechart();
      
        
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

*/



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

