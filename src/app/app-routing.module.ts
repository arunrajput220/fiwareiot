import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'aboutdeveloper',
    loadChildren: () => import('./aboutdeveloper/aboutdeveloper.module').then( m => m.AboutdeveloperPageModule)
  },
  {
    path: 'entitymanager',
    loadChildren: () => import('./entitymanager/entitymanager.module').then( m => m.EntitymanagerPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'createentity',
    loadChildren: () => import('./createentity/createentity.module').then( m => m.CreateentityPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'corionentity',
    loadChildren: () => import('./corionentity/corionentity.module').then( m => m.CorionentityPageModule)
  },
  {
    path: 'datavisualize',
    loadChildren: () => import('./datavisualize/datavisualize.module').then( m => m.DatavisualizePageModule)
  },
  {
    path: 'idm',
    loadChildren: () => import('./idm/idm.module').then( m => m.IdmPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'datavis',
    loadChildren: () => import('./datavis/datavis.module').then( m => m.DatavisPageModule)
  },
  {
    path: 'dashtest',
    loadChildren: () => import('./dashtest/dashtest.module').then( m => m.DashtestPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'controlpanel',
    loadChildren: () => import('./controlpanel/controlpanel.module').then( m => m.ControlpanelPageModule)
  },
  {
    path: 'wirecloud',
    loadChildren: () => import('./wirecloud/wirecloud.module').then( m => m.WirecloudPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
