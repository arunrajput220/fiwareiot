import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Chart } from "chart.js";
import {RestapiService} from '../restapi.service'


@Component({
  selector: 'app-dashtest',
  templateUrl: './dashtest.page.html',
  styleUrls: ['./dashtest.page.scss'],
})
export class DashtestPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;  
  @ViewChild('slides') slides;


  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('airqualitygraph') private airqualitygraph: ElementRef;
  @ViewChild('humiditygraph') private humiditygraph: ElementRef;
  @ViewChild('windspeedgraph') private windspeedgraph: ElementRef;

 
  segment=0


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

  

  constructor(private api :RestapiService,public loadingController: LoadingController,
    public alertController: AlertController,
    public modalController: ModalController ,
    public toastController: ToastController
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

 

  slideChanged() { 
    this.slides.nativeElement.getActiveIndex().then(index => {
       console.log(index);
    });
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
      this.lineChartMethod();
      this.windspeedChartMethod()
      this.humdityChartMethod();
      this.airqualityChartMethod();
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
           // console.log(res.slice(19, 38))
           let checkpoint = this.temptime[this.temptime.length - 1]
           let humiditycheckpoint = this.humidtime[this.humidtime.length - 1]
           let windspeedcheckpoint = this.windtime[this.windtime.length - 1]
           let aircheckpoint = this.airqtime[this.airqtime.length - 1]
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
          if ( this.watertankValue >= 30){
            if (this.alertarr[this.alertarr.length -1]!="Temp : "+this.watertankValue+ " at : "+(res.Temperature.metadata.TimeInstant.value).slice(11, 19)){
            this.alertarr.push("Temp : "+this.watertankValue+ " at : "+(res.Temperature.metadata.TimeInstant.value).slice(11, 19))
            this.alertcount = this.alertarr.length;    
            console.log(this.alertarr) 
            }     
          }
          if((res["Air Quality"].metadata.TimeInstant.value).slice(11, 19)!=aircheckpoint)
          {
            this.airqdata.push(this.airgaugeValue)
            this.airqtime.push((res["Air Quality"].metadata.TimeInstant.value).slice(11, 19))
          }

          if((res.Temperature.metadata.TimeInstant.value).slice(11, 19)!=checkpoint)
          {
            this.tempdata.push(this.watertankValue)
            this.temptime.push((res.Temperature.metadata.TimeInstant.value).slice(11, 19))
          }


          if((res.Humidity.metadata.TimeInstant.value).slice(11, 19)!=humiditycheckpoint)
          {
          this.humiddata.push(this.humditydata)
          this.humidtime.push((res.Humidity.metadata.TimeInstant.value).slice(11, 19))
          }
          if((res.WindSpeed.metadata.TimeInstant.value).slice(11, 19)!=windspeedcheckpoint)
          {
          this.winddata.push(this.windspeeddata)
          this.windtime.push((res.WindSpeed.metadata.TimeInstant.value).slice(11, 19))
          
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

  
  async Initization(){
    this.entities=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Data....'
    });
   await loading.present()
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
           this.tempdata.push(this.watertankValue)
           this.temptime.push((res.Temperature.metadata.TimeInstant.value).slice(11, 19))
           this.airqdata.push(this.airgaugeValue)
           this.airqtime.push((res["Air Quality"].metadata.TimeInstant.value).slice(11, 19))
           this.humiddata.push(this.humditydata)
           this.humidtime.push((res.Humidity.metadata.TimeInstant.value).slice(11, 19))
           this.winddata.push(this.windspeeddata)
           this.windtime.push((res.WindSpeed.metadata.TimeInstant.value).slice(11, 19))
           if ( this.watertankValue >= 30){
            this.alertarr.push("Temp : "+this.watertankValue+ " at : "+(res.Temperature.metadata.TimeInstant.value).slice(11, 19))
            this.alertcount = this.alertarr.length;              
            console.log(this.alertarr )  
          }
          if(this.tempdata.length == 6)
          {
            this.tempdata.splice(0, 1)
            this.temptime.splice(0, 1)
            this.lineChartMethod();
          } 
          if(this.airqdata.length == 6)
          {
            this.airqdata.splice(0, 1)
            this.airqtime.splice(0, 1)
            this.airqualityChartMethod();
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


