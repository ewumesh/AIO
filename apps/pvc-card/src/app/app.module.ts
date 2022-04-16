import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { PvcRouterModule } from './pvc-router.module';
import { UiModule } from './modules/ui/ui.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, PvcRouterModule,HttpClientModule, UiModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 10 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:10000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
