import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorsModule } from './tutors/tutors.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [TutorsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
