import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 120,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'circle',
          "stroke": {
             "width": 4,
             "color": "#fff"
          },"circle": {
             "nb_sides": 6
          },
        }, "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#b3b3b3",
          "opacity": 0.4,
          "width": 1
        }
      }
    };
  }

  //styles
  verticalAlign = "valign-center";
  materialSmallIcon = "material-icons-small-size";

  //functions
  public isCollapsed = false;

  value = '2';

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
}
