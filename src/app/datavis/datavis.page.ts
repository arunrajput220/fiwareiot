import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Chart } from "chart.js";
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-datavis',
  templateUrl: './datavis.page.html',
  styleUrls: ['./datavis.page.scss'],
})
export class DatavisPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  lineChart: any;
  datavalue: any=[]
  timevalue: any=[]
  val
  realtimedataen
  datavalue1: any=[]
  data=[]

  dat=[{"id": "Room6",
    "type": "Room",
    "pressure": {
        "type": "Float",
        "value": 900,
        "metadata": {}
    },
    "temperature": {
        "type": "Number",
        "value": 90,
        "metadata": {}
    }
}]

  test=[{
    _id: "6076a6f6b67c5465c8292709",
    attrName: 'Reaction_Time',
    attrType: 'Time',
    attrValue: 23,
    recvTime: "2021-04-14T08:25:24.609Z"
  },
  {
    _id: "6076a6f6b67c5465c829270a",
    attrName: 'RDX_Amount',
    attrType: 'Float',
    attrValue: 120,
    recvTime: "2021-04-14T08:25:24.609Z"
  },
  {
    _id: "6076a6f6b67c5465c829270b",
    attrName: 'Wire_Length',
    attrType: 'Integer',
    attrValue: 9,
    recvTime: "2021-04-14T08:25:24.609Z"
  }]
  constructor(private api :RestapiService, 
    public loadingController: LoadingController,
    public router: Router) {
     this.cygnusHumidity()
     // this.orionrealtime()
     this.onlyone()
      
     }

  ngOnInit() {
    
  }

  cancel(){
    this.router.navigateByUrl('datavisualize');
  }

  getval(data1,data2){
this.realtimedataen=data1
   this.val =data1+'_'+data2;
   
  }





  
  async orionrealtime(){
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Data....'
    });
   await loading.present()
    await this.api.getorionrealtime(this.realtimedataen)
          .subscribe(res => { 
            console.log(res)
            for(let i=0;i<res.length;++i){
              console.log("adding.."+res[i].attrName)
  
              this.data.push(res[0][i])
              
console.log(this.data)
            }
          
           
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    
  }




  async onlyone(){
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Data....'
    });
   await loading.present()
   this.api.cygusparamset(this.val);
    await this.api.getEntitydata()
          .subscribe(res => { 
            console.log(res)
            this.data.push(res[res.length-1])
           
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    
  }


  




  async cygnusHumidity(){
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Fetching Data....'
    });
   await loading.present()
   this.api.cygusparamset(this.val);
    await this.api.getEntitydata()
          .subscribe(res => { 
            console.log(res)
            for(let i=0;i<res.length;++i){
              console.log("adding.."+res[i].attrName)
              if(res[i].attrName === "temperature")
              {
                this.datavalue.push(res[i].attrValue)
              }
              if(res[i].attrName === "pressure"){
                this.datavalue1.push(res[i].attrValue)
              }
            //  this.timevalue.push((res[i].recvTime).slice(11.16))
             // this.data.push(res[i])

            }
            console.log(this.timevalue+"   "+this.datavalue+"   "+this.datavalue1)
            this.lineChartMethod();
          
           
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    
  }


  


/*
  async cygnusHumidity(){
    this.datavalue=[]
    this.timevalue=[]
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     
    });
   await loading.present()
    await this.api.gettimeseriescygnus(this.val)
          .subscribe(res => { 
            console.log(res)
            
            for(let i=0;i<res.lenght;++i){
              this.timevalue.push((res[i].recvTime).slice(11.16))
              this.datavalue.push(res[i].attrValue)

            }
            this.lineChartMethod();
          
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  } 
*/

  
  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels:this.timevalue,
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
            data: this.datavalue,
            spanGaps: false,
          },
            {
            label:'Celcius',
            data:this.datavalue1,
            borderColor: '#117A65',
            fill: false,
            }
              
        
        ],
      }
    });
  }

}
