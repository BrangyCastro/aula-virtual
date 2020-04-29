import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, PagesComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
