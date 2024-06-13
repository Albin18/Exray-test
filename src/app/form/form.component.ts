import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Product } from '../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductCardComponent, RouterOutlet],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [ProductService],
})
export class FormComponent {

  @Input() productLista!: Product;

   titulo: string = 'DETALLES DE PRODUCTOS POST'

   constructor(
    private productsService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute


   ) {}


   ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    const product = this.productsService.findById(id);
    if (product) {
      this.productLista = product;
    }

}
}
