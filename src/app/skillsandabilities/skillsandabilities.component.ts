import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsandabilities',
  templateUrl: './skillsandabilities.component.html',
  styleUrls: ['./skillsandabilities.component.css']
})
export class SkillsandabilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //Styles
  fontSmallSize = 'font-size-small';
  fontExtraSmallSize = 'font-size-extra-small';
  //functions


  myObject = [
    {
      name:'HTLM5',
      knowledge: 'KNOWLEDGE ABOUT HTML5',
      color: 'primary',
      mode: 'buffer',
      value: 90,
      bufferValue: 75
    },
    { 
      name:'JavaScript',
      knowledge: 'KNOWLEDGE ABOUT JAVASCRIPT',
      color: 'primary',
      mode: 'buffer',
      value: 90,
      bufferValue: 75
    },
    {
      name:'Css',
      knowledge: 'KNOWLEDGE ABOUT CSS',
      color: 'primary',
      mode: 'buffer',
      value: 75,
      bufferValue: 75
    },
    {
      name:'Bootstrap',
      knowledge: 'KNOWLEDGE ABOUT BOOTSTRAP',
      color: 'primary',
      mode: 'buffer',
      value: 85,
      bufferValue: 75
    },
    {
      name:'AngularJS 1 ',
      knowledge: 'KNOWLEDGE ABOUT ANGULARJS 1',
      color: 'primary',
      mode: 'buffer',
      value: 90,
      bufferValue: 75
    },
    {
      name:'AngularJS 2',
      knowledge: 'KNOWLEDGE ABOUT ANGULARJS 2',
      color: 'primary',
      mode: 'buffer',
      value: 80,
      bufferValue: 75
    },
    {
      name:'AngularJS 4',
      knowledge: 'KNOWLEDGE ABOUT ANGULARJS 4',
      color: 'primary',
      mode: 'buffer',
      value: 80,
      bufferValue: 75
    },
    {
      name:'PHP',
      knowledge: 'KNOWLEDGE  ABOUT PHP 5 AND PHP 7',
      color: 'primary',
      mode: 'buffer',
      value: 90,
      bufferValue: 75
    },
    {
      name:'Git',
      knowledge: 'KNOWLEDGE ABOUT GIT',
      color: 'primary',
      mode: 'buffer',
      value: 75,
      bufferValue: 75
    }
  ];
}
