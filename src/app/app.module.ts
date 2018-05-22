import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AosToken, aos } from './aos';
import { CollapseModule, ProgressbarModule } from 'ngx-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { MailService } from './services/mail.service';
import { ToastrModule } from 'ngx-toastr';

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
    , HttpClientModule
    , BrowserAnimationsModule
    , ToastrModule.forRoot()
    
  ],
  providers: [{ provide: AosToken, useValue: aos }, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
