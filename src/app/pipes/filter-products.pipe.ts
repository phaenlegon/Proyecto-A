import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(product: any[], searchText: string): any[] {
  if (!product){
  return [];
  }
  if(!searchText){
    return product;
  }
  searchText = searchText.toLowerCase();
  return product.filter(product => product.name.toLowerCase().includes(searchText));
  }
}
