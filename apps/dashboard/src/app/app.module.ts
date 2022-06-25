import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule, materialRoutes } from '@fem-prod-ng/material';
import { CoreDataModule, coreDataRoutes } from '@fem-prod-ng/core-data';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, CoreDataModule, MaterialModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
