import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';
import { Client3Component } from './client3/client3.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'client1', component: Client1Component },
  { path: 'client2', component: Client2Component },
  { path: 'client3', component: Client3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
