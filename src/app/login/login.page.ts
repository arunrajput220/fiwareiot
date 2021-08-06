import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  LoadingController, MenuController } from '@ionic/angular';
import {MatFormFieldControl} from '@angular/material/form-field';
import {RestapiService} from '../restapi.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

// res=[]

//   data=[
//         {name:"Arun Rajput",age:24,profile:"Systems Engineer"},
//         {name:"Mohit Gangwar",age:26,profile:"Java Developer"},
//         {name:"Devendar Yadav",age:25,profile:"SP Politician"},
//         {name:"Jitendra Tomar",age:27,profile:"Database Engineer"},
//         {name:"Harshit Garg",age:20,profile:"Quality Engineer"}
//       ]

// array1 = ['a', 'b', 'c', 'd', 'e'];

  constructor(public loadingController: LoadingController,private menuCtrl:MenuController,public router: Router,public api:RestapiService, private formBuilder: FormBuilder) {
    this.menuCtrl.enable(false);
    
    
//     console.log(this.data.filter(value => value.age > 26))
// // console.log(this.data.values())
// // for (let letter of this.data.values()) {
// //   console.log(letter);
// //  }

//    this.res= this.data.map(value => {
//     return value.age -3
//    })
   }
  

   
   /*
  ionViewWillEnter() {
    this.menuCtrl.swipeGesture(false);
}
*/




  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };


 
  

  

 
async  loginUser(value){

  this.router.navigateByUrl('home')
    
  //   const loading = await this.loadingController.create({
  //     cssClass: 'my-custom-class',
  //    message:"Logging Through Eupry"
  //   });
  //  await loading.present()
  //   await this.api.loginUser(value)
  //         .subscribe(res => { 
  //           console.log(res)
  //           this.router.navigateByUrl('myvaccdash')
            
  //       loading.dismiss();
  //     }, err => {
  //       console.log(err);
  //       loading.dismiss();
  //     });
  }
  
  createUser(){
    this.router.navigateByUrl('myvaccdash')
  }
  
}
