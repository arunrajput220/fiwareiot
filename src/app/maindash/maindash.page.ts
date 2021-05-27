import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maindash',
  templateUrl: './maindash.page.html',
  styleUrls: ['./maindash.page.scss'],
})
export class MaindashPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

recievevaccine(){
  this.router.navigateByUrl('receivevacc')
}
vaccinventory(){
  this.router.navigateByUrl('vaccinventory')
}
}
