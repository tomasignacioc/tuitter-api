import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true, // ignora las propiedades que no son especificadas en el class validator
    forbidNonWhitelisted: true, // ademas de lo anterior, devuelve un status code 400
    transformOptions: {
      enableImplicitConversion: true, // permite convertir los parametros que viajan por metodos HTTP de string a number por ej.
    }
  }));
  
  await app.listen(AppModule.port);
}
bootstrap();
