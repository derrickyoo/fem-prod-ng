import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule, materialRoutes } from '@fem/material';
import { CoreDataModule, coreDataRoutes } from '@fem/core-data';
import { RoutingModule } from './routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { HomeComponent } from './home/home.component';
import { WidgetsDetailsComponent } from './widgets/widgets-details/widgets-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    WidgetsComponent,
    WidgetsListComponent,
    HomeComponent,
    WidgetsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreDataModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
