import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PipedriveModule } from './modules/pipedrive/pipedrive.module';
import { BlingModule } from './modules/bling/bling.module';
import { DatabaseModule } from './modules/database/database.module';
import { IntegrationModule } from './modules/integration/integration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@<domain>/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    ),
    PipedriveModule,
    BlingModule,
    DatabaseModule,
    IntegrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
