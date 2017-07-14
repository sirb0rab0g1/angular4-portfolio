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
    },
    {

      projectTitle: 'Mrs. Spanglish',
      role: 'Web Developer',
      link: 'http://infosoftstudio.com/mrsspanglish/',
      language: [
        {
          html: 'Wordpress',
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
      title: 'Everything',
      desc: 'This site taught me everything so thanks for this!',
      name: 'Google',
      year: 'Present',
      btn: 'warning',
      img:'data:image/png;base64,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',
      fb:'googlephilippines/?brand_redir=104958162837'
    },
    {
      title: 'Python Django',
      desc: 'He taught how python-django works and guide me into basics',
      name: 'Rieljun Liguid ',
      year: '2017',
      btn: 'success',
      img:'https://scontent-hkg3-1.xx.fbcdn.net/v/t31.0-8/16665902_10208737043889603_5591910207594837889_o.jpg?oh=6b45a56c3c1c949ab6f90a9d89b73e18&oe=5A00EF60',
      fb:'lryuk92'
    },
    {
      title: 'Wordpress + VVV',
      desc: 'He gives his ideas towards wordpress basics',
      name: 'Guy Romelle Magayno ',
      year: '2017',
      btn: 'default',
      img:'https://scontent-hkg3-1.xx.fbcdn.net/v/t31.0-8/14372429_10206710453793056_6489077557797500514_o.jpg?oh=585c415fbf2a9d0c0bcab02c76b8357c&oe=5A11CEF8',
      fb:'mguyromelle'
    },
    {
      title: 'AngularJS',
      desc: 'He taught me everything including the basic and advance learning regarding the framework called ANGULARJS',
      name: 'Daniel Padilla',
      year: '2017',
      btn: 'danger',
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
