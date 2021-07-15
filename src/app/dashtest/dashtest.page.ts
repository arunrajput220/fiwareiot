import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, LoadingController, MenuController, ModalController, ToastController } from '@ionic/angular';
import { Chart } from "chart.js";
import {RestapiService} from '../restapi.service'



import { ApexChart, ChartComponent } from "ng-apexcharts";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {
  ApexAxisChartSeries,
  
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

import {
 
  ApexFill,
  
  ApexTooltip,
  
  ApexAnnotations,

} from "ng-apexcharts";
import { ToastrService } from 'ngx-toastr';

//import {dataSeries } from './series-data'
import { data } from "./series-data";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
};


@Component({
  selector: 'app-dashtest',
  templateUrl: './dashtest.page.html',
  styleUrls: ['./dashtest.page.scss'],
})
export class DashtestPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;  
  @ViewChild('slides') slides;


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('airqualitygraph') private airqualitygraph: ElementRef;
  @ViewChild('humiditygraph') private humiditygraph: ElementRef;
  @ViewChild('windspeedgraph') private windspeedgraph: ElementRef;




  @ViewChild("chart", { static: false }) chart1: ChartComponent;
  public chartOptions1: Partial<ChartOptions1>;
  public activeOptionButton = "all";
  public updateOptionsData = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1yd": {
      xaxis: {
        min: new Date("01 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };

 
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

//windspeeed parameter'
windspeeedType = "arch";
windspeeedmin=0;
windspeeedmax=100;
windspeeedsize=140;
windspeeedthick=10;
windspeeedValue ;
 
windspeeedLabel = "miles/h";
  //gaugeAppendText = " 'C";
  powerbackupthresholdConfig = {
    '60': {color: 'green'},
    '40': {color: 'orange'},
    '20': {color: 'red'}
};


//windspeeed parameter'
objectType = "arch";
objectmin=0;
objectmax=600;
objectsize=140;
objectthick=10;
objectValue ;
objectLabel = "cm";
  //gaugeAppendText = " 'C";
  objectthresholdConfig = {
    '60': {color: 'green'},
    '40': {color: 'orange'},
    '20': {color: 'red'}
};

Label="cm";
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
  sidemenu: boolean=false;

  
mydata =[{
  x: "2021-04-26 08:30:45",
  y: 76
},
{
  x: "2021-04-26 08:42:45",
  y: 77
},
{
  x: "2021-04-26 08:44:45",
  y: 78
},
{
  x: "2021-04-26 08:46:45",
  y: 70
},
{
  x: "2021-04-26 08:48:45",
  y: 17
},
{
  x: "2021-04-26 08:50:45",
  y: 76
},
{
  x: "2021-04-26 08:52:45",
  y: 77
},
{
  x: "2021-04-26 08:54:45",
  y: 78
},
{
  x: "2021-04-26 08:56:45",
  y: 70
},
{
  x: "2021-04-26 09:58:45",
  y: 17
}]
  constructor(private api :RestapiService,public loadingController: LoadingController,
    public alertController: AlertController,
    public modalController: ModalController ,
    public toastController: ToastController,
    private toastr: ToastrService,
    private menuCtrl:MenuController,/*public inAppBrowser: InAppBrowser*/) { 
     this.menuCtrl.enable(true);
//this.lineChartMethod()
// this.Initization()
// //this.Initization1()
this.mygraph();
this.powerbackup();
this.initChart()
// this.initTimer();
//       this. startTimer();
 this.fix()
   }



   
  initChart(): void {
    this.chartOptions1 = {
      series: [
        {
          data: this.mydata
        },
        {
          data: [{
            
            x: "2021-04-27 08:48:45",
            y: 17
          },
          {
            x: "2021-04-27 08:50:45",
            y: 76
          }]
        },
        { name: "Humidity",
          data: [{
            x: "2021-04-28 08:48:45",
            y: 17
          },
          {
            x: "2021-04-29 08:50:45",
            y: 76
          },
          {
            x: "2021-05-23 08:50:45",
            y: 76
          },
          {
            x: "2021-05-29 08:50:45",
            y: 76
          }]
        },
          {
            data: [{
              x: "2021-04-30 08:48:45",
              y: 17
            },
            {
              x: "2021-04-30 08:50:45",
              y: 76
            }]
          },
          { name: "Pressure",
            data: [{
              x: "2021-04-28 08:48:45",
              y: 20
            },
            {
              x: "2021-04-29 08:50:45",
              y: 80
            },
            {
              x: "2021-05-23 08:50:45",
              y: 90
            },
            {
              x: "2021-05-29 08:50:45",
              y: 100
            }]
          },
            
        
      ],
      chart: {
        type: "area",
        height: 350
      },
      annotations: {
        // yaxis: [
        //   {
        //     y: 30,
        //     borderColor: "#999",
        //     // label: {
        //     //   text: "Support",
        //     //   style: {
        //     //     color: "#fff",
        //     //     background: "#00E396"
        //     //   }
        //     // }
        //   }
        // ],
        xaxis: [
          {
            x: new Date("14 Jan 2021").getTime(),
            borderColor: "#999",
            label: {
              text: "Rally",
              style: {
                color: "#fff",
                background: "#775DD0"
              }
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
       // min: new Date("01 Mar 2021").getTime(),
        tickAmount: 6
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy HH:mm:ss"
        }
      }}
  }

  public updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }




   mygraph(){
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: this.tempdata
        },
        {
          name: "Desktops",
          data: [10,44,90]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
   }


   menuctlfun(){
    if(this.sidemenu == true){
      console.log("Entering true function : "+this.sidemenu)
      this.menuCtrl.enable(true)
      this.sidemenu = false
      console.log("exiting true function : "+this.sidemenu)
    // this.menuCtrl.enable(false)
    }
    else if(this.sidemenu == false){
      console.log("Entering False function : "+this.sidemenu)
      this.menuCtrl.enable(false)
      this.sidemenu = true
      console.log("Exting fslae function : "+this.sidemenu)
    }
    else{
      console.log("nothing")
    }
    console.log(this.sidemenu)
  //  this.menucontrol();
  }



   async  powerbackup(){
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     message:"Fetching........."
    });
 // await loading.present()
    await this.api.getPowerBackupData()
          .subscribe(res => { 
            console.log(res)
           // this.router.navigateByUrl('myvaccdash')
            this.powerbackupValue =res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

      await this.api.getTemperatureTimeSeries()
      .subscribe(res => { 
        console.log(res)
       // this.router.navigateByUrl('myvaccdash')
       this.watertankValue =res;
       this.tempdata.push(this.watertankValue)
       this.mygraph();
    loading.dismiss();
  }, err => {
    console.log(err);
    loading.dismiss();
  });



  await this.api.getAirQualityData()
  .subscribe(res => { 
    console.log(res)
   // this.router.navigateByUrl('myvaccdash')
   this.airgaugeValue =res;
loading.dismiss();
}, err => {
console.log(err);
loading.dismiss();
});



await this.api.getDistanceTimeSeries()
.subscribe(res => { 
  console.log(res)
 // this.router.navigateByUrl('myvaccdash')
 this.windspeeedValue =res;
loading.dismiss();
}, err => {
console.log(err);
loading.dismiss();
});


await this.api.getHumidityTimeSeries()
.subscribe(res => { 
  console.log(res)
 // this.router.navigateByUrl('myvaccdash')
 this.humditydata  =res;
loading.dismiss();
}, err => {
console.log(err);
loading.dismiss();
});

await this.api.getLightIntensityData()
.subscribe(res => { 
  console.log(res)
 // this.router.navigateByUrl('myvaccdash')
 this.pressure  =res;
loading.dismiss();
}, err => {
console.log(err);
loading.dismiss();
});


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
      // this.Initizationonce();
      // this.lineChartMethod();
      // this.windspeedChartMethod()
      // this.humdityChartMethod();
      // this.airqualityChartMethod();
      this.powerbackup();
    },4000)  
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


