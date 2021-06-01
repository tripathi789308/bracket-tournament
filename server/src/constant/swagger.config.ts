
import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
    .setTitle('Vogo Apps')
    .setDescription('The vogo apps API description')
    .setVersion('1.0')
    .addTag('Vogo Apis')
    .build();