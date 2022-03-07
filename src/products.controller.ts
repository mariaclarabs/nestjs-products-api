import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  index(): string {
    return 'list all products';
  }

  @Get(':id')
  find(@Param() { id }): string {
    return `product ${id} info`;
  }

  @Post()
  create(@Body() product): string {
    return `created product ${product.name}`;
  }

  @Put()
  alter(@Body() product): string {
    return `changed product ${product.name}`;
  }

  @Delete(':id')
  delete(@Param() { id }): string {
    return `deleted product ${id}`;
  }
}
