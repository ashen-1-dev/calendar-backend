import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 5000
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  await app.listen(PORT).then(() =>
    console.log(`Server started at port ${PORT}`)
  );
}
bootstrap();
