import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0]
  })
  constructor(private productService: ProductService, private formBuilder: FormBuilder, private route: Router) {

  }

  onSubmit() {
    const product:Product = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0
    }
    this.productService.addProduct(product).subscribe(() => {
      alert('Product added successfully')
      this.route.navigate(['/admin'])
    }
    )
  }
}
