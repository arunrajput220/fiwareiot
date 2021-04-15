import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigateByUrl('login');
  }

}
