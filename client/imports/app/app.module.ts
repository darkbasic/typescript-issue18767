import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { METEOR_PROVIDERS } from 'angular2-meteor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    METEOR_PROVIDERS
  ]
})
export class AppModule {
}