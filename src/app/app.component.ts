import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'stats-chart'
    },
    {
      title: 'Entity Manager',
      url: '/entitymanager',
      icon: 'speedometer'
    },
    {
      title: 'Data Visulizer',
      url: '/datavisualize',
      icon: 'bar-chart'
    },  
      {
      title: 'Identity Manger',
      url: '/idm',
      icon: 'shield-half'
    },  
    {
      title: 'WireCloud Platform',
      url: '/wirecloud',
      icon: 'dice'
    },
    {
      title: 'Control Panel',
      url: '/controlpanel',
      icon: 'toggle'
    },

    
    {
      title: 'Account',
      url: '/account',
      icon: 'person'
    },
    

    {
      title: 'About Developer',
      url: '/aboutdeveloper',
      icon: 'skull'
    },
    {
      title: 'Support',
      url: '/support',
      icon: 'build'
    },
    /*
    {
      title: 'IoT Platform Support',
      url: '/main',
      icon: 'pulse'
    },
    {
      title: 'Test Page',
      url: '/test',
      icon: 'dice'
    }
    */
  ];
  public labels = ['AtoS Fiware POC Application'];
  constructor() {}

 
}
