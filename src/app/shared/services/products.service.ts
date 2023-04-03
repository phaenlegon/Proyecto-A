import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {
  addProduct(product: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.url, product, { headers: headers })
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      );
  }
  private url = 'http://localhost:3000/products';
  constructor(private http: HttpClient){ }

    getProducts(){
      return this.http.get("http://localhost:3000/products")
    }
}
