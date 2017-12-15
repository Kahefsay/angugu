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
  sliderPrix: number;

  constructor(private pizzaServiceService: PizzaServiceService, private router: Router) { }

  ngOnInit() {
    this.isLoading = false;
    this.sliderPrix = 10;
    this.callPizzaService();
    this.pizzaServiceService.info("Component Carte").subscribe(
      (res) => {},
      (error) =>{},
    )
  }

  public callPizzaService() {
    this.isLoading = true;
    this.pizzaServiceService.getPizzas().subscribe(
      (res) => { this.onSuccess(res); },
      (error) => { this.onError(error); });
  }

  public callPizzaServiceCommander(pizza: Pizza) {
    this.isLoading = true;
    this.pizzaServiceService.postPizza(pizza).subscribe(
      (res) => { this.onSuccess(res); if (typeof(window.localStorage) !== "undefined") {
        window.localStorage.setItem('pizza', JSON.stringify(pizza));
      }; this.pizzaServiceService.commandeOk = true; this.router.navigate(['./confirmation']);},
      (error) => { this.onError(error);
        if (typeof(window.localStorage) !== 'undefined') {
          window.localStorage.setItem('pizza', JSON.stringify(pizza))}; this.pizzaServiceService.commandeOk = false; this.router.navigate(['./confirmation']); }
    );
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
      
      let piz: Pizza = new Pizza(ingredients, pate, base);
      piz.image = p.image;
      piz.prix = p.prix;

      this.pizza.push(piz);
    }

  }

  public onSuccessCommander(Pizza: any) { this.isLoading = false; console.log('success'); }
  public onError(err: HttpErrorResponse) { this.isLoading = false; this.pizzaServiceService.error("Erreur Commandec").subscribe(
    (res) => {},
    (error) =>{}         
  );console.log(err); }
}
