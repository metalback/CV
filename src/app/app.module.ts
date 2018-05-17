import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AosToken, aos } from './aos';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FoundationComponent } from './foundation/foundation.component';

@NgModule({
  declarations: [
    AppComponent,
    FoundationComponent
  ],
  imports: [
    BrowserModule
    , CollapseModule.forRoot()
    
  ],
  providers: [{ provide: AosToken, useValue: aos }],
  bootstrap: [AppComponent]
})
export class AppModule { }
