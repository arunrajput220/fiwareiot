import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { RestapiService } from '../restapi.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';

import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-receivevacc',
  templateUrl: './receivevacc.page.html',
  styleUrls: ['./receivevacc.page.scss'],
})
export class ReceivevaccPage implements OnInit {

  //---------chip param=================

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  //===================


  values
  
  
    panelOpenState = false;
    //-----------------------
  
    headElements=["cxgf,","jbkbk","jhgig","hjvjhg"]
  
  //--------------------
    attributes=[{id: "w7m9ixcls", attName: "dvsd", atttype: "Integer"}
    ,{id: "ed0ulxviy", attName: "dssd", atttype: "Integer"}
   
    ]
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
      options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  
   
    
      constructor(
        
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        public alertController: AlertController,
        public router: Router,
        private api :RestapiService,
        public loadingController: LoadingController,
        private http: HttpClient,
        public toastController: ToastController,
        
        private menuCtrl:MenuController) {
         this.menuCtrl.enable(true); 
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
      
        
       //   window.open('https://www.google.com', "_self");
          
      }


      //---------chip param------------------------------

      add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
    
        // Add our fruit
        if ((value || '').trim()) {
          this.fruits.push(value.trim());
        }
    
        // Reset the input value
        if (input) {
          input.value = '';
        }
    
        this.fruitCtrl.setValue(null);
      }
    
      remove(fruit: string): void {
        const index = this.fruits.indexOf(fruit);
    
        if (index >= 0) {
          this.fruits.splice(index, 1);
        }
      }
    
      selected(event: MatAutocompleteSelectedEvent): void {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
      }
    
      private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
      }

      //----------------------------
  
    
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
        // id: new FormControl('', Validators.compose([
        //     Validators.required
        //   ])),type: new FormControl('', Validators.compose([
        //     Validators.required,
        //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$') 
        //   ])),
         
        //   attribute_name: new FormControl('', Validators.compose([
        //     Validators.required,
        //     Validators.pattern('[a-zA-Z ]*')
        //   ])),
        //   attribute_type: new FormControl('', Validators.compose([
        //     Validators.required,
        //     Validators.pattern('[a-zA-Z ]*')
        //   ])),


          
          vendor: new FormControl('', Validators.compose([
            Validators.required
          ])),
          vacc_num: new FormControl('', Validators.compose([
            Validators.required,
          //  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$') 
          ])),
         
          exp_date: new FormControl('', Validators.compose([
            Validators.required,
          //  Validators.pattern('[a-zA-Z ]*')
          ])),

          id_fridge: new FormControl('', Validators.compose([
            Validators.required,
          //  Validators.pattern('[a-zA-Z ]*')
          ])),
         
          vacc_def: new FormControl('', Validators.compose([
            Validators.required,
          //  Validators.pattern('[a-zA-Z ]*')
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
    
      add1(){
        
        if(this.attname!=''&& this.atttype!=''){
          let id =Math.random().toString(36).substr(2, 9);
           this.attributes.push({"id":id,"attName":this.attname,"atttype":this.atttype})
           this.attname=""
           this.atttype=""
           this.toastr.success('Added','Atrribute', {
            timeOut: 1500,
          });
          console.log(this.attributes);
        }
        else{
          console.log("Enter Variables Properly")
          this.toastr.warning("can't be Empty"," Attribute Name & Type ",{
            timeOut: 1500,
          });
        }
        
  }
  
  edit(check){
  for(let i=0;i<this.attributes.length;++i ){
    if(this.attributes[i].id == check){
      this.attributes.splice(i,1)
    }
  }
  
  
  }
  delete(check){
    for(let i=0;i<this.attributes.length;++i ){
      if(this.attributes[i].id == check){
        this.attributes.splice(i,1)
        this.toastr.info("Attribute Deleted")
      }
  
  }
  
  }
  
  
  async confirmdel(check) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cnfirm Delete',
      //subHeader: 'Subtitle',
      message: 'Are you sure to delete the selected Attribute',
      buttons:[ {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.delete(check)
          console.log('Confirm Okay');
        }
      }
    ]
    });
  
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
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
      logout(){
        this.router.navigateByUrl('login');
      }
    
    async  tryRegister(value) {
      console.log(value)
      console.log(this.fruits)
      this.validations_form.reset()
  
          // const loading = await this.loadingController.create({
          //   cssClass: 'my-custom-class',
          //   message: 'Please Wait....'
          // });
          // await loading.present();
          // await this.api.createOrionEntity(value,this.attributes)
          //   .subscribe(res => {
          //     console.log(res)
          //     if(res=== ''){
          //       this.attributes=[]
          //   this.validations_form.reset()
          //       this.toastr.success('Created','Entity', {
          //         timeOut: 1500,
          //       });
          //      // EntitymanagerPage.prototype.allEntities()
          //       this.router.navigateByUrl('entitymanager')
            
          //     }else{
          //       this.toastr.error(res,'Entity Not Created', {
          //         timeOut: 2000,
          //       });
          //     }
              
            
            
            
          //     loading.dismiss();
          //   }, err => {
          //     console.log(err);
          //     loading.dismiss();
          //   });
            
      }
    
      onCancel(){
        this.router.navigateByUrl('myvaccdash')
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
        this.router.navigateByUrl('myvaccdash');
      }
    
    }
    
  
