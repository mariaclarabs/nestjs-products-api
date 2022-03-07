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
  async index(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  async find(@Param() { id }): Promise<Product> {
    return this.productService.getOne(id);
  }

  @Post()
  async create(@Body() product: Product) {
    this.productService.create(product);
  }

  @Put()
  async alter(@Body() product: Product): Promise<[number]> {
    return this.productService.alter(product);
  }

  @Delete(':id')
  async delete(@Param() { id }) {
    this.productService.delete(id);
  }
}
