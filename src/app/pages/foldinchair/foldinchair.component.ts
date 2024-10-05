import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foldinchair',
  templateUrl: './foldinchair.component.html',
  styleUrls: ['./foldinchair.component.css']
})
export class FoldinchairComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goToAmazon(){
    location.href = 'https://amzn.to/3Nh4gJD';
  }
  
}
