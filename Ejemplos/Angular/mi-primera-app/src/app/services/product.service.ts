import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  uri = `${environment.API_HOST_URL}products`

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.uri);
  }

  deleteProduct(product: Product) {
    return this.http.delete(`${this.uri}/${product.id}`);
  }

  getProduct(id: number) {
    return this.http.get(`${this.uri}/${id}`);
  }

  postProduct(product: Product): Observable<any> {
    return this.http.post(this.uri, product);
  }

  existProduct(id: number) {

  // Ejemplo de headers y query params
  /*const headers = new HttpHeaders()
    .set('header1', 'valor1')
    .set('header2', 'valor2');

  const params = new HttpParams()
    .set('query1', 'valor1')
    .set('query2', 'valor2');

  const options = {
    headers,
    params
  }*/

    return true;
  }

}
