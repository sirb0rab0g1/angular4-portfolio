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
      bufferValue: 90
    },
    { 
      name:'JavaScript',
      knowledge: 'KNOWLEDGE ABOUT JAVASCRIPT',
      color: 'primary',
      mode: 'buffer',
      value: 90,
      bufferValue: 90
    },
    {
      name:'Css',
      knowledge: 'KNOWLEDGE ABOUT CSS',
      color: 'primary',
      mode: 'buffer',
      value: 75,
      bufferValue: 90
    },
    {
      name:'Bootstrap',
      knowledge: 'KNOWLEDGE ABOUT BOOTSTRAP',
      color: 'primary',
      mode: 'buffer',
      value: 85,
      bufferValue: 90
    },
    {
      name:'AngularJS 1 ',
      knowledge: 'KNOWLEDGE ABOUT ANGULARJS 1',
      color: 'primary',
      mode: 'buffer',
      value: 90,
      bufferValue: 90
    },
    {
      name:'AngularJS 2',
      knowledge: 'KNOWLEDGE ABOUT ANGULARJS 2',
      color: 'primary',
      mode: 'buffer',
      value: 84,
      bufferValue: 90
    },
    {
      name:'AngularJS 4',
      knowledge: 'KNOWLEDGE ABOUT ANGULARJS 4',
      color: 'primary',
      mode: 'buffer',
      value: 84,
      bufferValue: 90
    },
    {
      name:'PHP',
      knowledge: 'KNOWLEDGE  ABOUT PHP 5 AND PHP 7',
      color: 'primary',
      mode: 'buffer',
      value: 90,
      bufferValue: 90
    },
    {
      name:'Wordpress',
      knowledge: 'KNOWLEDGE  ABOUT WORDPRESS',
      color: 'primary',
      mode: 'buffer',
      value: 10,
      bufferValue: 90
    },
    {
      name:'Python',
      knowledge: 'KNOWLEDGE  ABOUT PYTHON',
      color: 'primary',
      mode: 'buffer',
      value: 30,
      bufferValue: 90
    },
    {
      name:'Django',
      knowledge: 'KNOWLEDGE  ABOUT DJANGO',
      color: 'primary',
      mode: 'buffer',
      value: 5,
      bufferValue: 90
    },
    {
      name:'Git',
      knowledge: 'KNOWLEDGE ABOUT GIT',
      color: 'primary',
      mode: 'buffer',
      value: 75,
      bufferValue: 90
    }
  ];
}
