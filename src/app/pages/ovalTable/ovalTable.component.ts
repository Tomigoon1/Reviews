import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ovalTable',
  templateUrl: './ovalTable.component.html',
  styleUrls: ['./ovalTable.component.css']
})
export class OvalTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToAmazon(){
    location.href = 'https://amzn.to/4gW5ZSm';
  }
}
