import { ProductsServices } from './../shared/services/products.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
Number(arg0: any): number {
throw new Error('Method not implemented.');
}

  characters:any;
  productes: any;
  filterText: any;
  rating!:number;
  constructor(private productsServices: ProductsServices) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsServices.getProducts().subscribe((res:any) => {
      console.log(res)
      this.productes = res;
    });
  }
}
