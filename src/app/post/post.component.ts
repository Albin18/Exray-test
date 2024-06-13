import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductService } from '../services/product.service';
import { SharingDataService } from '../services/sharing-data.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  product: Product[] = [];

  constructor(
    private router: Router,
    private sharingDataService: SharingDataService,
    private service: ProductService
  ) {}
  ngOnInit(): void {
    this.product = this.service.findAll();
  }

}
