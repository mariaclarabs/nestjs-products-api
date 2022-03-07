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
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  index(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  find(@Param() { id }): Product {
    return this.productService.getOne(id);
  }

  @Post()
  create(@Body() product: Product) {
    product.id = 13;
    this.productService.create(product);
  }

  @Put()
  alter(@Body() product: Product): Product {
    return this.productService.alter(product);
  }

  @Delete(':id')
  delete(@Param() { id }) {
    this.productService.delete(id);
  }
}
