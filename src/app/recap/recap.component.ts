import { Component, OnInit } from '@angular/core';
import { PizzaServiceService } from '../pizza-service.service';
import { Pizza } from '../pizza';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  constructor(private pizzaServiceService: PizzaServiceService) { }

  isOrdered: boolean;

  ngOnInit() {
    this.isOrdered = this.pizzaServiceService.commandeOk;
  }
}
