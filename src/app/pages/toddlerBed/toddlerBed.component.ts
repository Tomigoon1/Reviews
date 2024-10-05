import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toddlerBed',
  templateUrl: './toddlerBed.component.html',
  styleUrls: ['./toddlerBed.component.css']
})
export class ToddlerBedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToAmazon(){
    location.href = 'https://amzn.to/3ZXCU2R';
  }
}
