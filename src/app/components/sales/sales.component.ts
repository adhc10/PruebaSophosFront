import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Sale,SaleG } from 'src/app/sale';
import { DataService } from 'src/app/service/data.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales:any;
  client:any;
  product:any;
  sale= new Sale();
  saleG= new SaleG();

  cantidadCtrl = new FormControl('', [Validators.required],);
  totalCtrl = new FormControl('', [Validators.required],);
  idProductCtrl = new FormControl('', [Validators.required],);
  idclientCtrl = new FormControl('', [Validators.required],);

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getSalesData();
    this.getClients();
    this.getProducts();
  }
  getSalesData(){
    this.dataService.getSalesData().subscribe(res => {
       this.sales=res;
    });
  }
  getClients(){
    this.dataService.getClients().subscribe(res => {
      this.client=res;
   });
  }
  getProducts(){
    this.dataService.getProducts().subscribe(res => {
      this.product=res;
   });
  }
  insertSale(){
    this.dataService.insertSale(this.sale).subscribe(res => {
      this.getSalesData();
      this.sale.Cantidad='';
      this.sale.ValorTotal='';
      this.sale.idProducto='';
      this.sale.idCliente='';
    });
  } 
}
