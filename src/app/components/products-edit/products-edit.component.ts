import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';



@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  id:any;
  data:any;
  product=new Product();
  constructor(private route:ActivatedRoute ,private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  getData(){
    this.dataService.getProductById(this.id).subscribe(res => {
      //console.log(res);
      this.data= res;
      this.product= this.data;
    })
  }
  updateProduct(){
    this.dataService.updateProduct(this.id,this.product).subscribe(res => {
      window.location.assign('products');
    });
  }

}
