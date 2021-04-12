import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
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
      title: 'Account',
      url: '/account',
      icon: 'person'
    },
    {
      title: 'IoT Platform Support',
      url: '/main',
      icon: 'pulse'
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
    }
  ];
  public labels = ['AtoS Fiware POC Application'];
  constructor() {}
}
