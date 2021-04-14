import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';
import { HttpClient } from '@angular/common/http';


export interface Data {
  movies: string;
}


@Component({
  selector: 'app-corionentity',
  templateUrl: './corionentity.page.html',
  styleUrls: ['./corionentity.page.scss'],
 
})
export class CorionentityPage implements OnInit {




  //-----------------------

  

//--------------------
  attributes=[]
  attname=''
  atttype=''

  public myForm: FormGroup;
    private playerCount: number = 1;
  
  
  public  validations_form: FormGroup;
    errorMessage: string = '';
    successMessage: string = '';
  
  
    validation_messages = {
      'email': [
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'Enter a valid email.' }
      ],
      'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 5 characters long.' }
      ],
      'name': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 6 characters long.' }
      ]
    };

 
  
    constructor(
      
    
      private formBuilder: FormBuilder,
      public alertController: AlertController,
      public router: Router,
      private api :RestapiService,
      public loadingController: LoadingController,
      private http: HttpClient,
      public toastController: ToastController
      
    ) { 
      
  
      
    }
  
    ngOnInit() {
      this.validations_form = this.formBuilder.group({
        /*
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])),
        name: new FormControl('', Validators.compose([
          Validators.required
        ])),
        */
      id: new FormControl('', Validators.compose([
          Validators.required
        ])),type: new FormControl('', Validators.compose([
          Validators.required
        ])),
       
        attribute_name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ])),
        attribute_type: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ])),
        
      });
    }
  

    async presentToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }
  
    add(){
      if(this.attname!=''&& this.atttype!=''){
         this.attributes.push({"attName":this.attname,"atttype":this.atttype})
         this.attname=""
         this.atttype=""
      }
      else{
        console.log("Enter Variables Properly")
        this.presentToast("Attribute Name  and  Attribute Type can't be <b>Empty</b>")
      }
}



    addControl(){
      console.log(this.myForm.value)
      this.playerCount++;
      this.myForm.addControl('attributes' + this.playerCount, new FormControl('', Validators.required));
   
    }
  
    addControl1(){
      console.log(this.validations_form.value)
      this.playerCount++;
      this.validations_form.addControl('attributes' + this.playerCount, new FormControl('', Validators.required));
   
    }
  
  
  
    
  
    removeControl(control){
      this.myForm.removeControl(control.key);
    }
  
  
  async  tryRegister(value) {

        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please Wait....'
        });
        await loading.present();
        await this.api.createOrionEntity(value,this.attributes)
          .subscribe(res => {
            console.log(res)
            
            
          this.attributes=[]
          this.validations_form.reset()
          this.presentToast(res)
          this.router.navigateByUrl('entitymanager')
            loading.dismiss();
          }, err => {
            console.log(err);
            loading.dismiss();
          });
          
    }
  
    onCancel(){
      this.router.navigateByUrl('entitymanager')
    }
    
  
    async displayErrorMsg(i) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
       // subHeader: 'Subtitle',
        message: i,
        
        buttons: ['OK']
      });
    
      await alert.present();
    }
    entityManagerPageroute(){
      this.router.navigateByUrl('entitymanager');
    }
  
  }
  
