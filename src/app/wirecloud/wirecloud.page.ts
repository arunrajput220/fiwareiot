import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wirecloud',
  templateUrl: './wirecloud.page.html',
  styleUrls: ['./wirecloud.page.scss'],
})
export class WirecloudPage implements OnInit {

  constructor( public router: Router
    ) {
      window.open('http://40.122.211.178/');
  this.router.navigateByUrl('home')
     }
  
    ngOnInit() {
     
    }
  
    open(){
      window.open('http://40.122.211.17');
      this.router.navigateByUrl('home')
    }
  
  }
