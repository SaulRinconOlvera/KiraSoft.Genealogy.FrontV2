import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LayOutModule } from './shared/layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { NoSessionModule } from './shared/session/no-session.module';
import { ErrorsModule } from './shared/error/errors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayOutModule,
    PagesModule,
    NoSessionModule,
    ErrorsModule,
    APP_ROUTES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
