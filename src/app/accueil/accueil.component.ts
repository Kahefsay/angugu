import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  localStorage: boolean;
  pizza: Pizza;

  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('pizza') != null){ 
      this.localStorage = true;
      const temp = JSON.parse(window.localStorage.getItem('pizza'));

      this.pizza = new Pizza(temp.ingredients, temp.pate, temp.base);
     }
  }

}
