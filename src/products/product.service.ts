import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    // new Product('B01', 'Book 01', 19.9),
    // new Product('B02', 'Book 02', 29.9),
    // new Product('B03', 'Book 03', 39.9),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product);
  }

  alter(product: Product): Product {
    return product;
  }

  delete(id: number) {
    this.products.pop();
  }
}
