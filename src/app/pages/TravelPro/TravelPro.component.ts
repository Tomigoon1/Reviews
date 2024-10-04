import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TravelPro',
  templateUrl: './TravelPro.component.html',
  styleUrls: ['./TravelPro.component.css']
})
export class TravelProComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToAmazon(){
    location.href = 'https://amzn.to/4eMyqA2';
  }

}
