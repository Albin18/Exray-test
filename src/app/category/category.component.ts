import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input() productLista!: Product;

}
