import { Test, TestingModule } from '@nestjs/testing';
import { GrandprixService } from './grandprix.service';
import { PrismaService } from 'src/prisma.service';

describe('GrandprixService', () => {
  let service: GrandprixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrandprixService, PrismaService],
    }).compile();

    service = module.get<GrandprixService>(GrandprixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
