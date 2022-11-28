import { Component, OnInit } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { DataService } from '../../service/data.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  product=new Product();
  
  nameCtrl = new FormControl('', [Validators.required,Validators.minLength(4)],);
  valorUnitarioCtrl = new FormControl('', [Validators.required],);
  constructor(private DataService:DataService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.DataService.getProducts().subscribe(res => {
       this.products=res;
    });
  }
  insertProduct(){    
    this.DataService.insertProduct(this.product).subscribe(res => {
      this.getProducts();
      this.product.Nombre='';
      this.product.ValorUnitario='';
    });
  } 
  deleteProduct(id: any){
    this.DataService.deleteProduct(id).subscribe(data => {
      this.getProducts();
    }, err => {
        if(err.status != '200'){
           alert("No se puede eliminar el registro ya que tiene ventas asignadas.");
        }
    })
  }

}
