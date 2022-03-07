import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { Product } from './products/product.model';
import { ProductService } from './products/product.service';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'products',
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class AppModule {}
