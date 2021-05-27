import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';
import { ApexAxisChartSeries, ApexDataLabels, ApexGrid, ApexLegend, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis, ChartComponent } from "ng-apexcharts";
import {animate, state, style, transition, trigger} from '@angular/animations';

import {ApexNonAxisChartSeries,ApexResponsive,ApexChart} from "ng-apexcharts";

export type linechartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};



@Component({
  selector: 'app-datalogger',
  templateUrl: './datalogger.page.html',
  styleUrls: ['./datalogger.page.scss'],
})
export class DataloggerPage implements OnInit {
  @ViewChild("chart1") linechart: ChartComponent;
  public linechartOptions: Partial<linechartOptions>;


max:any=[]
min:any=[]
avg:any=[]
time:any=[]


  sensorinfo:any=[]
  constructor(public loadingController: LoadingController,public api:RestapiService) { 
this.check()
this.linechartgraph()
  }

  ngOnInit() {
  }

  async geteuphrydata(location_id,profile_id){

    this.max=[]
      this.min=[]
      this.avg=[]
      this.time=[]
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     message:"Loding Entities...."
    });
   //await loading.present()
   console.log(location_id,profile_id)
   
     this.api.dataloggerstatus()
     this.api.geteuphrydata(location_id,profile_id)
      .subscribe(res => {
        console.log(res);
        if(res!== []){
        for(let i=0;i<25;i++){
          this.max.push((res[i].max))
          this.min.push((res[i].min))
          this.avg.push((res[i].avg))
          this.time.push(new Date(res[i].time* 1000))

        }
      }else{
        this.max=["No DATA"]
        this.min=[]
        this.avg=[]
        this.time=[]
      }
this.linechartgraph()
console.log("check"+this.time)
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  

  }


  linechartgraph(){

    this.linechartOptions = {
      series: [
        
        {
          name: "Avg",
          data: this.avg
        }
      ],
      chart: {
        height: 450,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
       // enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Average High & Low Temperature",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
       categories:this.time,
        title: {
          text: "Time"
        }
      },
      yaxis: {
        title: {
          text: "Temperature"
        },
        min: 0,
        max:10
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }
  
  
  

  async  check(){
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     message:"Loding Entities...."
    });
   await loading.present()
    this.api.dataloggerstatus()
      .subscribe(res => {
        console.log(res);
        for(let i=0;i<res.length;i++){
          this.sensorinfo.push(res[i])

        }
console.log("check"+this.sensorinfo.length)
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
