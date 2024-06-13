import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productJSON } from '../data/product.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  findAll(): Product[]{
    return productJSON;
  }

 findById(id:number): Product | undefined {
  return productJSON.find(product => product.id === id);
 }

}
