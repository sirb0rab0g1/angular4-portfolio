import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  //Styles
  fontSmallSize = 'font-size-small';
  imageStyle = 'image-style';

  //functions
  public name: string = "Starts the passion of coding web applications from 2016";

  myMainProjects = [
    {

      projectTitle: 'Trivia Nights App v1',
      role: 'Front End Web Developer',
      link: 'http://trivtrak.com/#/',
      language: [
        {
          html: 'HTML',
          css: 'CSS',
          boot: 'Bootstrap',
          angular: 'AngularJS'
        }
      ]
    }
  ]

  myExercisesPrograms = [
    {
      projectTitle: 'AngularJS 1 Material Dashboard',
      role: 'Front End Web Developer',
      link: 'http://kentoyfueconcillo.000webhostapp.com/#/',
      language: [
        {
          html: 'HTML',
          css: 'CSS',
          boot: 'Bootstrap',
          amaterial: 'Angular Material Design',
          angular: 'AngularJS'
        }
      ]
    },
    {
      projectTitle: 'AngularJS 1 Material Portfolio',
      role: 'Front End Web Developer',
      link: 'https://fueconcillo-old-portfolio.000webhostapp.com/',
      language: [
        {
          html: 'HTML',
          css: 'CSS',
          boot: 'Bootstrap',
          amaterial: 'Angular Material Design',
          angular: 'AngularJS'
        }
      ]
    },
    {
      projectTitle: 'AngularJS 4 Material + Bootstrap 4 Portfolio',
      role: 'Front End Web Developer',
      link: 'https://sirb0rab0g1.github.io/angular4-portfolio/',
      language: [
        {
          html: 'HTML',
          css: 'CSS',
          boot: 'Bootstrap 4',
          amaterial: 'Angular 2 Material Design',
          angular: 'AngularJS 4'
        }
      ]
    }
  ]

  myMasters = [
    {
      title: 'AngularJS',
      desc: 'He taught me everything including the basic and advance learning regarding the framework called ANGULARJS',
      name: 'Daniel Padilla',
      year: '2017',
      btn: 'warning',
      img:'https://scontent.fmnl9-1.fna.fbcdn.net/v/t31.0-8/18422526_10209111293808076_4247746191712721810_o.jpg?oh=1223befb041e91d418a153134527834c&oe=59CA9CE9',
      fb:'daniel.fernando.padilla'
    },
    {
      title: 'Advance HTML + PHP',
      desc: 'He taught me everyhing including the basic in the beginning of my career as a web developer',
      name: 'Joven Lanoy',
      year: '2016',
      btn: 'default',
      img:'https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.0-9/19225542_1540747479310169_300686832798472172_n.jpg?oh=0c8e8f12ad7dda12ad14634c1118d4ea&oe=59FF02D3',
      fb:'vhenzreign'
    }
  ]

}
