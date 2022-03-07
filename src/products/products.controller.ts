import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('B01', 'Book 01', 19.9),
    new Product('B02', 'Book 02', 29.9),
    new Product('B03', 'Book 03', 39.9),
  ];

  @Get()
  index(): Product[] {
    return this.products;
  }

  @Get(':id')
  find(@Param() { id }): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product) {
    product.id = 13;
    this.products.push(product);
  }

  @Put()
  alter(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() { id }) {
    this.products.pop();
  }
}
