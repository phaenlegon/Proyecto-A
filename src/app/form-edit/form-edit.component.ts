import { ProductsServices } from './../shared/services/products.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent{

  @Input()
  NameF = '';
  PriceF = '';
  DesF = '';
  imgF = '';
  OpiF = '';

  constructor(private productsService: ProductsServices) { }

  onSubmit() {
    const product = {
      name: this.NameF,
      price: this.PriceF,
      description: this.DesF,
      image: this.imgF,
      opinions: this.OpiF
    };
    this.productsService.addProduct(product).subscribe((res:any) => {
      console.log(res);
      this.NameF = '';
      this.PriceF = '';
      this.DesF = '';
      this.imgF = '';
      this.OpiF = '';
    });
  }
}
