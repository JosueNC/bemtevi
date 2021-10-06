import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { ComponentsModule } from './shared/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { EstoqueModule } from './pages/estoque/estoque.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ComponentsModule,
    BrowserAnimationsModule,
    HomeModule,
    EstoqueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
