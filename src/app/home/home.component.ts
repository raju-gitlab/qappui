import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  active = 1;
  redirectfunction() {
    // let location = window.location.href;
    // window.URL.
    console.log("works");
    
  }
  
  ngOnInit(): void {

  }

}
