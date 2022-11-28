import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductsComponent } from './components/products/products.component';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { SalesComponent } from './components/sales/sales.component';

const appRoutes: Routes=[
  { path: '',component:ClientsComponent  },
  { path: 'editClient/:id',component:ClientsEditComponent },
  { path: 'products',component:ProductsComponent },
  { path: 'editProduct/:id',component:ProductsEditComponent },
  { path: 'sales',component:SalesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ProductsComponent,
    ClientsEditComponent,
    ProductsEditComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }