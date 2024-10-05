import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NikeAirZoomStructureComponent } from './pages/NikeAirZoomStructure/NikeAirZoomStructure.component';
import { TravelLaptopBackpackComponent } from './pages/TravelLaptopBackpack/TravelLaptopBackpack.component';
import { Ipad9Component } from './pages/Ipad9/Ipad9.component';
import { TravelProComponent } from './pages/TravelPro/TravelPro.component';
import { MonitorSceptreComponent } from './pages/monitorSceptre/monitorSceptre.component';
import { StockTankComponent } from './pages/stockTank/stockTank.component';
import { ToddlerBedComponent } from './pages/toddlerBed/toddlerBed.component';
import { FoldinchairComponent } from './pages/foldinchair/foldinchair.component';
import { OvalTableComponent } from './pages/ovalTable/ovalTable.component';

const routes: Routes = [
  {path:'nikeAirZoomStructure',component:NikeAirZoomStructureComponent},
  {path:'travelLaptopBackpack',component:TravelLaptopBackpackComponent},
  {path:'ipad9',component:Ipad9Component},
  {path:'travelPro',component:TravelProComponent},
  {path:'monitrSpectre',component:MonitorSceptreComponent},
  {path:'rubbermaidStockTank',component:StockTankComponent},
  {path:'toddlerBed',component:ToddlerBedComponent},
  {path:'foldingchair',component:FoldinchairComponent},
  {path:'ovalTable',component:OvalTableComponent},
  {path:'**',component:NikeAirZoomStructureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
