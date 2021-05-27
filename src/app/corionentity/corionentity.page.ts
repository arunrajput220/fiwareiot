import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {Sort} from '@angular/material/sort';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import {EntitymanagerPage} from '../entitymanager/entitymanager.page'

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
]; 
@Component({
  selector: 'app-corionentity',
  templateUrl: './corionentity.page.html',
  styleUrls: ['./corionentity.page.scss'],
 
})
export class CorionentityPage implements OnInit {



values
displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  panelOpenState = false;
  //-----------------------

  headElements=["cxgf,","jbkbk","jhgig","hjvjhg"]

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
      
      private toastr: ToastrService,
      private formBuilder: FormBuilder,
      public alertController: AlertController,
      public router: Router,
      private api :RestapiService,
      public loadingController: LoadingController,
      private http: HttpClient,
      public toastController: ToastController
      
    ) { 
      
      const users = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
      

    

    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }



     createNewUser(id: number): UserData {
      const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
          NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    
      return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
      };
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

        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please Wait....'
        });
        await loading.present();
        await this.api.createOrionEntity(value,this.attributes)
          .subscribe(res => {
            console.log(res)
            if(res=== ''){
              this.attributes=[]
          this.validations_form.reset()
              this.toastr.success('Created','Entity', {
                timeOut: 1500,
              });
              EntitymanagerPage.prototype.allEntities()
              this.router.navigateByUrl('entitymanager')
          
            }else{
              this.toastr.error(res,'Entity Not Created', {
                timeOut: 2000,
              });
            }
            
          
          
          
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
  
