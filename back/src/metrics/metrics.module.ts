import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { CustomMetricsService } from './custom-metrics.service';
import { makeCounterProvider, makeGaugeProvider, makeHistogramProvider } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [PrometheusModule],
  providers: [
    makeCounterProvider({
      name: 'http_requests_total',
      help: 'Nombre total de requêtes HTTP',
    }),
    makeCounterProvider({
      name: 'bets_created_total',
      help: 'Nombre total de paris créés',
    }),
    makeCounterProvider({
      name: 'app_errors_total',
      help: 'Nombre total d’erreurs applicatives',
    }),
    makeGaugeProvider({
      name: 'active_users',
      help: 'Nombre d’utilisateurs actifs',
    }),
    makeHistogramProvider({
      name: 'bet_creation_duration_seconds',
      help: 'Durée de création d’un pari (en secondes)',
      buckets: [0.1, 0.5, 1, 2, 5, 10],
    }),
    CustomMetricsService,
  ],
  exports: [CustomMetricsService],
})
export class MetricsModule {}