import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './pages/index/index.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    PortfolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
