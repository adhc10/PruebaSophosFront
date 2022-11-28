import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client';
import { Product } from '../product';
import { Sale } from '../sale';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  readonly ApiUrl="http://localhost/WebApiSophos/api";

  constructor(private httpClient:HttpClient) { }

  /* Servicios de Clients*/
  getClients(){
    return this.httpClient.get(this.ApiUrl + '/Clients');
  }
  getClientById(id:any){
    return this.httpClient.get(this.ApiUrl + `/Clients/${id}`);
  }
  updateClient(id:any,data: Client){
    return this.httpClient.put(this.ApiUrl + `/Clients/${id}`,data);
  }
  insertClient(data: Client){
    return this.httpClient.post(this.ApiUrl + '/Clients',data);
  }  
  deleteClient(id :any){
    return this.httpClient.delete(this.ApiUrl + `/Clients/${id}`);
  }  
  /* Servicios de Products*/
  getProducts(){
    return this.httpClient.get(this.ApiUrl + '/Products');
  }
  getProductById(id:any){
    return this.httpClient.get(this.ApiUrl + `/Products/${id}`);
  }
  updateProduct(id:any,data: Product){
    return this.httpClient.put(this.ApiUrl + `/Products/${id}`,data);
  }
  insertProduct(data: Product){
    return this.httpClient.post(this.ApiUrl + '/Products',data);
  }  
  deleteProduct(id :any){
    return this.httpClient.delete(this.ApiUrl + `/Products/${id}`);
  }
  getSalesData(){
    return this.httpClient.get(this.ApiUrl + '/Sales');
  }  
  insertSale(data: Sale){
    return this.httpClient.post(this.ApiUrl + '/Sales',data);
  }
}
