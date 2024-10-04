import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NikeAirZoomStructureComponent } from './pages/NikeAirZoomStructure/NikeAirZoomStructure.component';
import { TravelLaptopBackpackComponent } from './pages/TravelLaptopBackpack/TravelLaptopBackpack.component';
import { Ipad9Component } from './pages/Ipad9/Ipad9.component';
import { TravelProComponent } from './pages/TravelPro/TravelPro.component';
import { MonitorSceptreComponent } from './pages/monitorSceptre/monitorSceptre.component';

const routes: Routes = [
  {path:'nikeAirZoomStructure',component:NikeAirZoomStructureComponent},
  {path:'travelLaptopBackpack',component:TravelLaptopBackpackComponent},
  {path:'ipad9',component:Ipad9Component},
  {path:'travelPro',component:TravelProComponent},
  {path:'monitrSpectre',component:MonitorSceptreComponent},
  {path:'**',component:NikeAirZoomStructureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
