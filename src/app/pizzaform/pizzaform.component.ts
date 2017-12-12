import { Component, OnInit } from '@angular/core';
import {Base, Ingredient, Pate, Pizza} from '../pizza';
import { PizzaServiceService } from '../pizza-service.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizzaform',
  templateUrl: './pizzaform.component.html',
  styleUrls: ['./pizzaform.component.css']
})
export class PizzaformComponent implements OnInit {
  constructor(private pizzaServiceService: PizzaServiceService, private router: Router) { }
  private isLoading: boolean;
  private pizza: Pizza;
  private isValid: boolean;

  pates: Pate[] = [
    { nom: 'Fine'},
    { nom: 'Epaisse'},
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

  ngOnInit() {
    this.pizza = new Pizza(this.ingredients, this.pates[0], this.bases[0]);
    this.isLoading = false;
  }

  isValidForm() {
    this.isValid = false;
    for (const ingredient of this.pizza.ingredients) {
      if (ingredient.value) {this.isValid = true; }
    }
    return this.isValid;
  }

  public callPizzaService() {
    this.isLoading = true;
    this.pizzaServiceService.postPizza(this.pizza).subscribe(
      (res) => { this.onSuccess(res); if (typeof(window.localStorage) !== "undefined") {
        window.localStorage.setItem('pizza', JSON.stringify(this.pizza));
      }; this.pizzaServiceService.commandeOk = true; this.router.navigate(['./confirmation']);},
      (error) => { this.onError(error);
        if (typeof(window.localStorage) !== 'undefined') {
          window.localStorage.setItem('pizza', JSON.stringify(this.pizza))}; this.pizzaServiceService.commandeOk = false; this.router.navigate(['./confirmation']); }
    );
  }


  public onSuccess(Pizza: any) { this.isLoading = false; console.log('success'); }
  public onError(err: HttpErrorResponse) { this.isLoading = false; console.log(err); }
}
