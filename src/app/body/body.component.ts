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
      'z-index': 0,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
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
          "opacity": 3,
          "width": 1
        }
      }, 
      interactivity: {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
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
