import { ValidationPipe } from '@nestjs/common';
import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerConfig } from './constant/swagger.config';
import { urlencoded, json } from 'body-parser';
import { APIPrefix } from './constant/common';




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(APIPrefix.Version);
  const port = parseInt(process.env.SERVER_PORT);
  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3003);
}
bootstrap();