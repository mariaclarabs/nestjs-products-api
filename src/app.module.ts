import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [],
})
export class AppModule {}
