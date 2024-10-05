import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockTank',
  templateUrl: './stockTank.component.html',
  styleUrls: ['./stockTank.component.css']
})
export class StockTankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToAmazon(){
    location.href = 'https://amzn.to/3YfkadW';
  }
}
