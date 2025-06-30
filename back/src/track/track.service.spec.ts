import { Test, TestingModule } from '@nestjs/testing';
import { TrackService } from './track.service';
import { PrismaService } from 'src/prisma.service';

describe('TrackService', () => {
  let service: TrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrackService, PrismaService],
    }).compile();

    service = module.get<TrackService>(TrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
