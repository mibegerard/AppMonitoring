import { Injectable } from '@nestjs/common';
import { Counter, Gauge, Histogram } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class CustomMetricsService {
  constructor(
    @InjectMetric('http_requests_total')
    private readonly httpRequestsCounter: Counter<string>,
    @InjectMetric('bets_created_total')
    private readonly betsCreatedCounter: Counter<string>,
    @InjectMetric('app_errors_total')
    private readonly errorsCounter: Counter<string>,
    @InjectMetric('active_users')
    private readonly activeUsersGauge: Gauge<string>,
    @InjectMetric('bet_creation_duration_seconds')
    private readonly betCreationDuration: Histogram<string>,
  ) {}

  incrementHttpRequests() {
    this.httpRequestsCounter.inc();
  }

  incrementBetsCreated() {
    this.betsCreatedCounter.inc();
  }

  incrementErrors() {
    this.errorsCounter.inc();
  }

  setActiveUsers(count: number) {
    this.activeUsersGauge.set(count);
  }

  observeBetCreationDuration(seconds: number) {
    this.betCreationDuration.observe(seconds);
  }
}
