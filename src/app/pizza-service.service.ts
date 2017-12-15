import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Pizza} from './pizza';

@Injectable()
export class PizzaServiceService {

  constructor(private http: HttpClient) { }
  private urlGet = 'http://localhost:4300/pizzas';
  private urlPost = 'http://localhost:4300/commanderPizza?';
  private urlLog = 'http://localhost:4300/logger/'
  public commandeOk = false;

  public getPizzas(): Observable<Pizza[]> {
    return this.http.get(this.urlGet).catch((err: any) => Observable.throw(err || 'Error'));
  }

  public postPizza(pizza: Pizza): Observable<Pizza[]> {
    const ingredient = pizza.ingredientToString();
    this.urlPost += 'base=' + pizza.base.nom + '&pate=' + pizza.pate.nom + '&' + ingredient[0] + '&' + ingredient[1] +
'&' + ingredient[2] + '&' + ingredient[3];

    return this.http.post(this.urlPost, '' ).catch((err: any) => Observable.throw(err || 'Erreur'));
  }

  public info(message:string): Observable<Pizza[]>{

    let urlLogInfo = this.urlLog + "info?" + "message=" + message; 
    console.log(urlLogInfo);
    return this.http.post(urlLogInfo, '').catch((err: any) => Observable.throw(err|| 'Erreur'))
  }

  public error(message: string): Observable<Pizza[]>{
    let urlLogError = this.urlLog + "error?" + "message=" + message;
    return this.http.post(urlLogError, '').catch((err: any) => Observable.throw(err|| 'Erreur'))
  }
  

}
