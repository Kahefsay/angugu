import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent} from './accueil/accueil.component';
import { PizzaformComponent } from './pizzaform/pizzaform.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'composer', component: PizzaformComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
