import {  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";



import {
 
  ApexAxisChartSeries,

  ApexXAxis,
  
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  
  ApexMarkers,
  ApexYAxis
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-vaccinventory',
  templateUrl: './vaccinventory.page.html',
  styleUrls: ['./vaccinventory.page.scss'],
})
export class VaccinventoryPage implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @ViewChild("chart") chart1: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;

  constructor(private router : Router) {
    
    this.chartgraph();
   }

  ngOnInit() {
  }

  entityManagerPageroute(){
    this.router.navigateByUrl('myvaccdash');
  }

/*
linechart(){
  this.chartOptions1 = {
    series: [
      {
        name: "",
        data: []
      }
    ],
    chart: {
      height: 350,
      type: "line"
    },
    stroke: {
      width: 7,
      curve: "smooth"
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001"
      ]
    },
    title: {
      text: "Social Media",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#666"
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    yaxis: {
      min: -10,
      max: 40,
      title: {
        text: "Engagement"
      }
    }
  };
}
*/

  chartgraph(){

    this.chartOptions = {
      series: [4409, 5589, 1335, 4113, 9120],
      chart: {
        type: "donut"
      },
      labels: ["Pfizer", "Monderna", "Astrazenica", "Jonhson&Jonhson", "Bharat-Biotech"],
      
   
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
