import { Test, TestingModule } from '@nestjs/testing';
import { LeagueService } from './league.service';
import { PrismaService } from 'src/prisma.service';

describe('LeagueService', () => {
  let service: LeagueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueService, PrismaService],
    }).compile();

    service = module.get<LeagueService>(LeagueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
