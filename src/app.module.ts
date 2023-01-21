import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';
import { env } from 'process';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jalvie:jalvie@cluster0.7ekrrhn.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
