import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TravelLaptopBackpack',
  templateUrl: './TravelLaptopBackpack.component.html',
  styleUrls: ['./TravelLaptopBackpack.component.css']
})
export class TravelLaptopBackpackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToAmazon(){
    location.href = 'https://amzn.to/3YeE6xy';
  }

}
