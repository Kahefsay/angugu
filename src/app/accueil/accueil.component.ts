import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaServiceService } from '../pizza-service.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  localStorage: boolean;
  pizza: Pizza;
  isLoading: boolean;

  constructor(private pizzaServiceService: PizzaServiceService, private router: Router) { }

  ngOnInit() {
    if (window.localStorage.getItem('pizza') != null) {
      this.isLoading = false;
      this.localStorage = true;
      const temp = JSON.parse(window.localStorage.getItem('pizza'));

      this.pizza = new Pizza(temp.ingredients, temp.pate, temp.base);
     }
    
    this.pizzaServiceService.info("Component Accueil").subscribe(
      (res) => {},
      (error) =>{}

    );

  }

  public callPizzaService() {
    this.isLoading = true;
    this.pizzaServiceService.postPizza(this.pizza).subscribe(
      (res) => { this.onSuccess(res); if (typeof(window.localStorage) !== 'undefined') {
        window.localStorage.setItem('pizza', JSON.stringify(this.pizza));
      } 
      this.pizzaServiceService.commandeOk = true; this.router.navigate(['./confirmation']); 
      },
      (error) => { this.onError(error);
        if (typeof(window.localStorage) !== 'undefined') {
          window.localStorage.setItem('pizza', JSON.stringify(this.pizza)); 
        }
        this.pizzaServiceService.commandeOk = false; this.router.navigate(['./confirmation']);
          
      }
    );
  }


  public onSuccess(Pizza: any) { this.isLoading = false; console.log('success'); }
  public onError(err: HttpErrorResponse) { this.isLoading = false; this.pizzaServiceService.error("Erreur Commande").subscribe(
    (res) => {},
    (error) =>{}         
  );console.log(err); }

}
