import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import {Router} from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

product!: Product[];


constructor(
  private productService: ProductService,
  private sharingDataService: SharingDataService,
  private router: Router) {
    if(this.router.getCurrentNavigation()?.extras.state){
      this.product = this.router.getCurrentNavigation()?.extras.state!['products']
    }
  }

ngOnInit():void {
  if(!this.product){
    this.product = this.productService.findAll();
  }
}
}
