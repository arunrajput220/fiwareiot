// register.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertController, NavController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-createentity',
  templateUrl: './createentity.page.html',
  styleUrls: ['./createentity.page.scss'],
})
export class CreateentityPage implements OnInit {


attributes=[]

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
    private api :RestapiService
    
  ) { 
    this.myForm = formBuilder.group({
      attribute_name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      atrributr_object: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      
    });
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
     fiware_service: new FormControl('', Validators.compose([
        Validators.required,
        
      ])),
      fiware_servicepath: new FormControl('', Validators.compose([
        Validators.required,
      
      ])),
      device_id: new FormControl('', Validators.compose([
        Validators.required
      ])),
      entity_name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      entity_type: new FormControl('', Validators.compose([
        Validators.required
      ])),
      time_zone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      atrribute_object: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
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


  tryRegister(value) {
  //  console.log(value)
    this.api.createEntity(value)
    /*  .then(res => {
        console.log("console outpir"+res);
        this.displayErrorMsg("Your account has been created. Please log in.") 
      //   this.errorMessage = "";
        // this.successMessage = ;
      }, err => {
        console.log(err);
      // this.errorMessage = err.message;
       this.displayErrorMsg(err.message) ;
      })*/
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
