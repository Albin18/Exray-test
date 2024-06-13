import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { FormComponent } from '../form/form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {


  @Input() productLista!: Product;

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();
   constructor(private router: Router) {}

  // Método para redirigir a /form
  navigateToForm(id:number): void {
    this.router.navigate(['/form', id]);
  }

}
