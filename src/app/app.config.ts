import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authTokenInterceptor } from './auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(withInterceptors([authTokenInterceptor])),
     provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })]
};
