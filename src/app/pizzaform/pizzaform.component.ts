import { Component, OnInit } from '@angular/core';
import {Base, Ingredient, Pate, Pizza} from '../pizza';

@Component({
  selector: 'app-pizzaform',
  templateUrl: './pizzaform.component.html',
  styleUrls: ['./pizzaform.component.css']
})
export class PizzaformComponent implements OnInit {
  private pizza: Pizza;

  pates: Pate[] = [
    { nom: 'Fine', prix: 4},
    { nom: 'Epaisse', prix: 4},
  ];

  bases: Base[] = [
    { nom: 'Tomate', prix: 3},
    { nom: 'Crème Fraiche', prix: 4},
  ];

  ingredients: Ingredient[] = [
    { nom: 'Anchois', prix: 1, value: false},
    { nom: 'Miel', prix: 2, value: false},
    { nom: 'Jambon', prix: 2, value: false},
    { nom: 'Magret', prix: 4, value: false}
  ];

  constructor() { }

  ngOnInit() {
    this.pizza = new Pizza(this.ingredients, this.pates[0], this.bases[0]);
  }
}
