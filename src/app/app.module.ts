import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { PizzaServiceService } from './pizza-service.service';
import {HttpClient, HttpErrorResponse, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { PizzaformComponent } from './pizzaform/pizzaform.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './/app-routing.module';
import { RecapComponent } from './recap/recap.component';
import { CarteComponent } from './carte/carte.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaformComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    RecapComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PizzaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
