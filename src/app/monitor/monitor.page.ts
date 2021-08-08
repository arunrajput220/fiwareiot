import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {

  status_val:number
  status_mongodb:number
  status_mssql
  status_cygnus
  status_keyrock
  status_pep_proxy
  sidemenu: boolean=false;;

  constructor(private api :RestapiService,
    public loadingController: LoadingController,
    private menuCtrl:MenuController) {
   this.fix()
   }

  ngOnInit() {
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


  fix(){
    setInterval( ()=>{
      this.orionhealth();
      this.cygnushealth();
      this.keyrockhealth();
      this.pepproxyhealth();
  //    this.mongodbhealth();
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
           if(res.orion_status == 'Available'){
           // this.status_val = null
             this.status_val =1;
           }
           else if (res.orion_status == 'Not Available'){
           // this.status_val = null
             this.status_val = 0 ;
           }else{
            this.status_val = 5 ;
           }
            
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
     
  }







  async cygnushealth(){
    //  this.status_val = null;
      const loading = await this.loadingController.create({
       
      });
     //await loading.present()
      await this.api.Cygnushealth()
                 .subscribe(res => { 
  
             console.log(res)
             if(res.cygnus_status == 'Available'){
             // this.status_val = null
               this.status_cygnus =1;
             }
             else if (res.cygnus_status == 'Not Available'){
             // this.status_val = null
             this.status_cygnus  = 0 ;
             }else{
              this.status_cygnus = 5 ;
             }
              
          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });


        
       
    }



    async pepproxyhealth(){
      //  this.status_val = null;
        const loading = await this.loadingController.create({
         
        });
       //await loading.present()
        await this.api.pepproxykhealth()
                   .subscribe(res => { 
    
               console.log(res)
               if(res.pep_proxy_status == 'Available'){
               // this.status_val = null
                 this.status_pep_proxy =1;
               }
               else if (res.pep_proxy_status == 'Not Available'){
               // this.status_val = null
               this.status_pep_proxy  = 0 ;
               }else{
                this.status_pep_proxy = 5 ;
               }
                
            loading.dismiss();
          }, err => {
            console.log(err);
            loading.dismiss();
          });
        }



        async keyrockhealth(){
          //  this.status_val = null;
            const loading = await this.loadingController.create({
             
            });
           //await loading.present()
            await this.api.keyrockhealth()
                       .subscribe(res => { 
        
                   console.log(res)
                   if(res.keyrock_status == 'Available'){
                   // this.status_val = null
                     this.status_keyrock =1;
                   }
                   else if (res.keyrock_status == 'Not Available'){
                   // this.status_val = null
                   this.status_keyrock  = 0 ;
                   }else{
                    this.status_keyrock = 5 ;
                   }
                    
                loading.dismiss();
              }, err => {
                console.log(err);
                loading.dismiss();
              });
        }  
        
        
        async mongodbhealth(){
          //  this.status_val = null;
            const loading = await this.loadingController.create({
             
            });
           //await loading.present()
            await this.api.mongodbkhealth()
                       .subscribe(res => { 
        
                   console.log(res)
                   if(res.mongodb_status == 'Available'){
                   // this.status_val = null
                     this.status_mongodb =1;
                   }
                   else if (res.mongodb_status == 'Not Available'){
                   // this.status_val = null
                   this.status_mongodb  = 0 ;
                   }else{
                    this.status_mongodb= 5 ;
                   }
                    
                loading.dismiss();
              }, err => {
                console.log(err);
                loading.dismiss();
              });
        }  


}
