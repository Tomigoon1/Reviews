import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-NikeAirZoomStructure',
  templateUrl: './NikeAirZoomStructure.component.html',
  styleUrls: ['./NikeAirZoomStructure.component.css']
})
export class NikeAirZoomStructureComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  goToAmazon(){
    location.href = 'https://amzn.to/3YaWmrv';
  }


}
