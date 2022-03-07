import { Module } from '@nestjs/common';
import { ProductService } from './products/product.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class AppModule {}
