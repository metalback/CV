import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AosToken, aos } from './aos';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [{ provide: AosToken, useValue: aos }],
  bootstrap: [AppComponent]
})
export class AppModule { }
