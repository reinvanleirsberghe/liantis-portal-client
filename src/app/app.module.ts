import {
  MICRO_FRONTEND_TRANSLATION,
  MicroFrontendToolsModule,
  defineCustomElement,
} from '@liantis-ds/micro-frontend-tools';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { APP_BASE_HREF, CommonModule, PlatformLocation } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent],
  imports: [
    BrowserModule,
    MicroFrontendToolsModule,
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation],
    },
    {
      provide: MICRO_FRONTEND_TRANSLATION,
      useExisting: TranslateService,
    },
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap() {
    defineCustomElement(AppComponent, this.injector);
  }
}
