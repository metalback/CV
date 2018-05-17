import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AosToken, aos } from './aos';
import { CollapseModule, ProgressbarModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , CollapseModule.forRoot()
    , ProgressbarModule.forRoot()
    
  ],
  providers: [{ provide: AosToken, useValue: aos }],
  bootstrap: [AppComponent]
})
export class AppModule { }
