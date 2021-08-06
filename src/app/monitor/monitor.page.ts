import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {

  status_val:number
  constructor(private api :RestapiService,public loadingController: LoadingController) {
   this.fix()
   }

  ngOnInit() {
  }

  fix(){
    setInterval( ()=>{
      this.orionhealth();
    },2000)  
   }

  async orionhealth(){
  //  this.status_val = null;
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
     message:"Loding Entities....",
     duration:2000
    });
   //await loading.present()
    await this.api.contextbrokerhealth()
          .subscribe(res => { 

           console.log(res)
           if(!res.orion.version){
           // this.status_val = null
             this.status_val =0 ;
           }
           else{
           // this.status_val = null
             this.status_val = 1 ;
           }
            
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }

}
