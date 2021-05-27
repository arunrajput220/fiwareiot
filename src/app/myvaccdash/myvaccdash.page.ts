import { Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { ChartComponent } from "ng-apexcharts";
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


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA3: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


export interface vaccineData {
  center_id: number;
  center_name: String;
  vacc_stoke: string;
  vacc_waste: string;
  vacc_total: string;
}

const ELEMENT_DATA : vaccineData[] = [
  {center_id: 1, center_name: "New Delhi", vacc_stoke: "2,67,578", vacc_waste: "10,224",vacc_total:"5,23,156"},
  {center_id: 2, center_name: "Lucknow", vacc_stoke: "9,21,348", vacc_waste: "44,703",vacc_total:"14,45,974"},
  {center_id: 3, center_name: "Chandigarh", vacc_stoke: "32,866", vacc_waste: "2,703",vacc_total:"85,644"},
  {center_id: 4, center_name: "Shimla", vacc_stoke: "1,63,923", vacc_waste: "16,390",vacc_total:"3,90,278"},
  {center_id: 5, center_name: "Bhopal", vacc_stoke: "4,39,894", vacc_waste: "19,912",vacc_total:"4,81,924"},
  {center_id: 6, center_name: "Jaipur", vacc_stoke: "3,67,289", vacc_waste: "51,322",vacc_total:"3,10,141"},
  {center_id: 7, center_name: "Patna", vacc_stoke: "1,23,912", vacc_waste: "90,643",vacc_total:"2,67,561"},
  {center_id: 8, center_name: "Ahemdabad", vacc_stoke: "1,23,912", vacc_waste: "90,643",vacc_total:"2,67,561"},
  {center_id: 9, center_name: "Mumbai", vacc_stoke: "1,23,912", vacc_waste: "90,643",vacc_total:"2,67,561"},
  {center_id: 10, center_name: "Bangalore", vacc_stoke: "1,23,912", vacc_waste: "90,643",vacc_total:"2,67,561"},
  {center_id: 11, center_name: "Chennai", vacc_stoke: "1,23,912", vacc_waste: "90,643",vacc_total:"2,67,561"},
];

const ELEMENT_DATA1 : any = [
  {order_id: "TAX-12M3423", center_name: "New Delhi", order_date: "21-04-2021", type: "Moderna",order_quantity:"1,00,156",status:"In Trasist",shipped_order:"5,23,156",color:"medium"},
  {order_id: "TAX-12M3332", center_name: "Lucknow", order_date: "16-04-2021", type: "Bhart Biotech",order_quantity:"2,56,514",status:"Dispatched",shipped_order:"13,90,317"},
  {order_id: "TAX-12M3427", center_name: "Bangalore", order_date: "30-04-2021", type: "Pfizer",order_quantity:"2,56,514",status:"Shipped",shipped_order:"13,90,317"},
  

];


import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { RestapiService } from '../restapi.service';


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


export type lineChartOptions = {
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

export class TableExpandableRowsExample {
  dataSource = ELEMENT_DATA4;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement1 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA4: PeriodicElement1[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];


@Component({
  selector: 'app-myvaccdash',
  templateUrl: './myvaccdash.page.html',
  styleUrls: ['./myvaccdash.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MyvaccdashPage implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  @ViewChild("chart1") linechart: ChartComponent;
  public linechartOptions: Partial<lineChartOptions>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = new MatTableDataSource(ELEMENT_DATA3);

  displayedColumns: string[] = ['center_id', 'center_name', 'vacc_stoke', 'vacc_waste','vacc_total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns1: string[] = ["order_id", "center_name", "order_date", "type","order_quantity","status","shipped_order"];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);

  max:any=[]
  min:any=[]
  avg:any=[]
  time:any=[]

  sidemenu:boolean=false
  vtype="order"

  tvacc =0
  svacc =0
  wvacc =0

  constructor( public router: Router,private menuCtrl:MenuController,public loadingController: LoadingController,public api:RestapiService,) {
    this.menuCtrl.enable(true)
  //  this.data()
    this.vaccinedata();
this.linechartgraph();
this.fix()
   }

  ngOnInit() {
  }

  fix(){
    setInterval( ()=>{
      this.testnumbers(1500)
    },2000)  
   }


  testnumbers(inputSeconds: number){

    var d = new Date();

    
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
     var n =(d.getTime());
      
    //  return hoursString + ':' + minutesString + ':' + secondsString;
    this.tvacc =24243423436567-n
    this.svacc =25282626+n+(n-3443)
    this.wvacc =n-1609999941356

  
     
  }

  recievevacc(){
    this.router.navigateByUrl("receivevacc")
  }

  vaccinventory(){
    this.router.navigateByUrl("vaccinventory")
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

  menucontrol(){
    if(this.sidemenu = true){
   
    }
    if(this.sidemenu = false){
      
      }
  }




  async  check(){
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     message:"Loding Entities...."
    });
   await loading.present()
    this.api.opspanel()
      .subscribe(res => {
        console.log(res);
        window.open('http://13.232.236.50/demo-ops-panel ');

        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }




  


  async  data(){
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     message:"Fetching Datalogger Data...."
    });
   await loading.present()
    this.api.getdataeuphry()
      .subscribe(res => {
        console.log(res);
       // window.open('http://13.232.236.50/demo-ops-panel ');
       for(let i=0;i<res.length;++i){
         if(res[i].max !=null){
          this.max.push(res[i].max.toFixed(2))
         }
         if(res[i].min !=null){
          this.min.push(res[i].min.toFixed(2))
         }
         if(res[i].avg !=null){
          this.avg.push(res[i].avg.toFixed(2))
         }
         if(res[i].time !=null){
          this.time.push(res[i].time)
         }
         
       }
       this.linechartgraph();

        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


  check1(){
   
      window.open('http://13.232.236.50/demo-ops-panel ');
     // this.router.navigateByUrl('home')
    
  }

  logout(){
    this.router.navigateByUrl('login');
  }

vaccinedata(){
  this.chartOptions = {
    series: [44, 55, 13, 43, 120],
    chart: {
      type: "donut"
    },
    labels: ["Pfizer", "Monderna", "Astrazenica", "Jonhson&Jonhson", "Bharat-Biotech"],
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


linechartgraph(){
  this.linechartOptions = {
    series: [
      {
        name: "Max",
        data: this.max
      },
      {
        name: "Avg",
        data: this.avg
      },
      
      {
        name: "Min",
        data: this.min
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
        text: "Month"
      }
    },
    yaxis: {
      title: {
        text: "Temperature"
      },
      min: -27,
      max: -20
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


maindash(){
  this.router.navigateByUrl('maindash')
}

dataloggerroute(){
  this.router.navigateByUrl('datalogger')
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource2.sort = this.sort;
  }



}
