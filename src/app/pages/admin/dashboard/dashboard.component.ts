import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  products!: Product[]
  
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  onRemove(id: string | number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
    })
  }
}
