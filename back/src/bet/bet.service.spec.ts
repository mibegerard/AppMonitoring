import { Test, TestingModule } from '@nestjs/testing';
import { BetService } from './bet.service';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { CustomMetricsService } from '../metrics/custom-metrics.service';
import { Counter, Gauge, Histogram } from 'prom-client';

// Mocks Prometheus metrics tokens attendus par CustomMetricsService
const promCounterMock = { inc: jest.fn() };
const promGaugeMock = { set: jest.fn() };
const promHistogramMock = { observe: jest.fn() };

const promProviders = [
  { provide: 'PROM_METRIC_HTTP_REQUESTS_TOTAL', useValue: promCounterMock },
  { provide: 'PROM_METRIC_BETS_CREATED_TOTAL', useValue: promCounterMock },
  { provide: 'PROM_METRIC_APP_ERRORS_TOTAL', useValue: promCounterMock },
  { provide: 'PROM_METRIC_ACTIVE_USERS', useValue: promGaugeMock },
  { provide: 'PROM_METRIC_BET_CREATION_DURATION_SECONDS', useValue: promHistogramMock },
];

describe('BetService', () => {
  let service: BetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BetService, PrismaService, UserService, CustomMetricsService, ...promProviders],
    }).compile();

    service = module.get<BetService>(BetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
