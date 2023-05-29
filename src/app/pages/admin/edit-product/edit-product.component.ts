import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product!: Product
  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0]
  })
  constructor(private productService: ProductService, private formBuilder: FormBuilder, private router: ActivatedRoute, private route: Router) {
    this.router.paramMap.subscribe(params => {
      const id = params.get('id')
      this.productService.getProduct(id!).subscribe(data => {
        this.product = data

        this.productForm.patchValue({
          name: data.name,
          price: data.price
        })
      })
    })
  }

  onSubmit() {
    if (this.productForm.valid) {

      const product: Product = {
        id: this.product.id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0
      }
      this.productService.updateProduct(product).subscribe(() => {
        alert('Product updated successfully')
        this.route.navigate(['/admin'])
      }
      )
     }

  }
}
