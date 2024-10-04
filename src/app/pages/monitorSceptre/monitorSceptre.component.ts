import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitorSceptre',
  templateUrl: './monitorSceptre.component.html',
  styleUrls: ['./monitorSceptre.component.css']
})
export class MonitorSceptreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToAmazon(){
    location.href = 'https://amzn.to/3TU27ag';
  }
}
