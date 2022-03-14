import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true, // ignora las propiedades que no son especificadas en el class validator
    forbidNonWhitelisted: true, // ademas de lo anterior, devuelve un status code 400
  }));
  
  await app.listen(3000);
}
bootstrap();
