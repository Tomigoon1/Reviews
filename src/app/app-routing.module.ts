import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NikeAirZoomStructureComponent } from './pages/NikeAirZoomStructure/NikeAirZoomStructure.component';

const routes: Routes = [
  {path:'nikeAirZoomStructure',component:NikeAirZoomStructureComponent},
  {path:'**',component:NikeAirZoomStructureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
