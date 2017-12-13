import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PizzaServiceService} from '../pizza-service.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Base, Ingredient, Pate, Pizza} from '../pizza';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  isLoading: boolean;
  pizza: Pizza[] = [];

  constructor(private pizzaServiceService: PizzaServiceService, private router: Router) { }

  ngOnInit() {
    this.isLoading = false;
    this.callPizzaService();
  }

  public callPizzaService() {
    this.isLoading = true;
    this.pizzaServiceService.getPizzas().subscribe(
      (res) => { this.onSuccess(res); },
      (error) => { this.onError(error); });
  }

  public onSuccess(res: any) {
    this.isLoading = false;
    console.log(res);

    for (const p of res) {
      let pate: Pate;
      let base: Base;

      pate = { nom: p.pate} ;
      if (p.base = 'tomate') { base = {nom: 'Tomate', prix: 3}; } else { base = { nom: 'Crème Fraiche', prix: 4}; }

      const ingredients: Ingredient[] = [
        { nom: 'Anchois', prix: 1, value: p.anchois},
        { nom: 'Miel', prix: 2, value: p.miel},
        { nom: 'Jambon', prix: 2, value: p.jambon},
        { nom: 'Magret', prix: 4, value: p.magret}
      ];

      this.pizza.push((new Pizza(ingredients, pate, base)));
    }

  }

  public onError(err: HttpErrorResponse) { this.isLoading = false; console.log(err); }
}
