import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaformComponent } from './pizzaform/pizzaform.component';

const routes: Routes = [
  { path: 'composer', component: PizzaformComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
