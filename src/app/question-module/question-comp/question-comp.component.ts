import { HttpclientserviceService } from '../../Services/httpclientservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-comp',
  templateUrl: './question-comp.component.html',
  styleUrls: ['./question-comp.component.css']
})
export class QuestionCompComponent implements OnInit {

  constructor(private clientservice: HttpclientserviceService) { }
  sidebarcontents:any;
  count = 10;
  name() {
    console.log("Called");
    try {
      this.clientservice.Get("ListCategories/62c032df7483b4fbd1a1801e").subscribe(data => {
        this.sidebarcontents = data.listcategory;
      });
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    this.name();
  }

}
