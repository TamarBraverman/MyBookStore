import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myDate:Date;
  constructor() {

    this.myDate=new Date();
   }

  ngOnInit() {
  }

}
