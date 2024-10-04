import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Ipad9',
  templateUrl: './Ipad9.component.html',
  styleUrls: ['./Ipad9.component.css']
})
export class Ipad9Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToAmazon(){
    location.href = 'https://amzn.to/3ZSqkSj';
  }
}
