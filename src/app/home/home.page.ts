import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sidemenu:boolean=false

  constructor(
    private toastr: ToastrService,
    private menuCtrl:MenuController,/*public inAppBrowser: InAppBrowser*/) { 
     this.menuCtrl.enable(true);
  //  // this.menuCtrl.swipeGesture(true)
  //     this.toastr.success('Hello world!', 'Toastr fun!');
  //  // this.toastr.warning()
    
  //   this.toastr.success('everything is broken', 'Major Error', {
  //     timeOut: 3000,
  //   });
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
}
