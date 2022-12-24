import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  togNav() {
    var nav = document.getElementById("nav-container");
    if (nav) {  // Vérifiez que nav existe avant d'appliquer des styles
      if (nav.style.display === "block") {
        nav.style.display = "none";
      } else {
        nav.style.display = "block";
      }
    }
  }
  

  constructor() { }

  ngOnInit(): void {

  }

}
