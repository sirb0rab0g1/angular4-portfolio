import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //styles
  verticalAlign = "valign-center";
  materialSmallIcon = "material-icons-small-size";

  //functions
  public isCollapsed = false;

  value = '1';
}
