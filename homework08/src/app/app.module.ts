import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { dataReducer } from './ngrx/data.reducer';
import { MainComponent } from './main/main.component';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './ngrx/data.effects';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

    MainComponent,
     HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      data: dataReducer
    }, {}),
    EffectsModule.forRoot([DataEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
