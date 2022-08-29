import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {MongooseModule} from "@nestjs/mongoose";
import {TagModule} from "./tag/tag.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_CONNECTION'),
      }),
      inject: [ConfigService],
    }),
    TagModule
  ],
})
export class AppModule {}
