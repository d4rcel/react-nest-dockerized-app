import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('BACKEND_PORT') || 3001;
  const url =
    configService.get<string>('BACKEND_URL') || 'http://localhost:3001';
  app.enableCors({
    origin: url,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });

  await app.listen(port);
}
bootstrap();
