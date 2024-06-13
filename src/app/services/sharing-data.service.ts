import {EventEmitter ,Injectable } from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idProductEventEmitter : EventEmitter<string>= new EventEmitter();

  private _productEventEmitter: EventEmitter<Product> = new EventEmitter();


  constructor() { }

  get idProductEventEmitter() {
    return this._idProductEventEmitter
  }

  get productEventEmitter(): EventEmitter<Product> {
    return this._productEventEmitter;
  }

}
