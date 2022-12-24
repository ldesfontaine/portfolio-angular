import { Competence } from './../models/competence.model';
import { Project } from './../models/project.model';
import { Component, OnInit } from '@angular/core';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  competences!: Competence[];
  projects!: Project[];

  faUser = faUser;
  faEye = faEye;





scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
}


  ngOnInit() {

    this.competences = [
      {
        imageUrl: '../assets/Image/git.png',
        title: 'Version Controller',
        description: 'J’utilise des outils telle que Git pour versionner mes projets' +
        ' et pour faciliter le travail en équipe'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'WEB DEVELOPMENT',
        description: 'Je créer des interfaces avec différents language comme le HTML, PHP,'+
        'CSS, JS mais aussi avec des framework comme Laravel, Angular ...'
      },
      {
        imageUrl: '../assets/Image/dev.png',
        title: 'APP DEVELOPEMENT',
        description: 'Je créer également des applications, avec différent language '+
        'comme Python, Java .'
      },
    ];

    this.projects = [
      {
        imageUrl: '../assets/Image/portfolio.png',
        title: 'Portfolio',
        description: 'Il s’agit du portfolio que vous êtes entrain de consulter.'+
        ' Il a été réalisé avec le framework Angular',
        site_link: 'https://portfolio.ldesfontaine.me/',
        github_link: 'https://github.com/ldesfontaine/portfolio-angular',
      },
      {
        imageUrl: '../assets/Image/location.png',
        title: 'Projet location de voiture',
        description:'Il s’agit d’un site de location de voiture.'+
        ' Il a été réalisé avec le framework Laravel',
        site_link: 'https://location.ldesfontaine.me/',
        github_link: 'https://github.com/ldesfontaine/location',
      },

    ];

  }
}
