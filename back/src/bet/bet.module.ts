import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetResolver } from './bet.resolver';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { MetricsModule } from '../metrics/metrics.module';

@Module({
  imports: [MetricsModule],
  providers: [BetService, BetResolver, PrismaService, UserService],
})
export class BetModule {}