import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AosToken, aos } from './aos';
import { CollapseModule, ProgressbarModule } from 'ngx-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , CollapseModule.forRoot()
    , ProgressbarModule.forRoot()
    , RecaptchaModule.forRoot()
    
  ],
  providers: [{ provide: AosToken, useValue: aos }],
  bootstrap: [AppComponent]
})
export class AppModule { }
