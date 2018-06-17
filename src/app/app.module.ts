import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YearComponent } from './games-container/year/year.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamesComponent } from './games-container/games/games.component';
import { GamesContainerComponent } from './games-container/games-container.component';

@NgModule({
  declarations: [
    AppComponent,
    YearComponent,
    DashboardComponent,
    GamesComponent,
    GamesContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
