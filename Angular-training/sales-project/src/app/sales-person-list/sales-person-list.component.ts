import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
// create an array of objects
salesPersonList:SalesPerson[]=[
  new SalesPerson("Habtom","Gebre","tom@gmail.com",5000),
  new SalesPerson("Sam","Tes","sam@gmail.com",6000),
  new SalesPerson("Moksi","Welday","moksi@gmail.com",4000),
  new SalesPerson("Jhone","Geswa","jhone@gmail.com",8000),
];
  constructor() { }

  ngOnInit(): void {
  }

}
