import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idm',
  templateUrl: './idm.page.html',
  styleUrls: ['./idm.page.scss'],
})
export class IdmPage implements OnInit {

  constructor(
    public router: Router
  ) {
    window.open('http://137.135.116.1:3005');
this.router.navigateByUrl('dashboard')
   }

  ngOnInit() {
   
  }

  open(){
    window.open('http://137.135.116.1:3005');
    this.router.navigateByUrl('dashboard')
  }

}
