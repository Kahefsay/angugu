import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent} from './accueil/accueil.component';
import { PizzaformComponent } from './pizzaform/pizzaform.component';
import { RecapComponent } from './recap/recap.component';
import { CarteComponent } from './carte/carte.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'composer', component: PizzaformComponent },
  { path: 'confirmation', component: RecapComponent },
  { path: 'carte', component: CarteComponent }
  ];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
