import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor() { }
  zoom:number = 18;
  lat: number = 37.473869;
  lng: number = -122.246255;

  ngOnInit() {
  }

}
