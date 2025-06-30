import { Test, TestingModule } from '@nestjs/testing';
import { PilotService } from './pilot.service';
import { PrismaService } from 'src/prisma.service';

describe('PilotService', () => {
  let service: PilotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PilotService, PrismaService],
    }).compile();

    service = module.get<PilotService>(PilotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
