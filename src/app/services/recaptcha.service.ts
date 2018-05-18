import { Injectable } from '@angular/core';
import { RecaptchaLoaderService } from 'ng-recaptcha';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class RecaptchaService {
	public ready: Observable<ReCaptchaV2.ReCaptcha>;

  	constructor() { 
	  let readySubject = new BehaviorSubject<ReCaptchaV2.ReCaptcha>(grecaptcha);
	    this.ready = readySubject.asObservable();
	}

}
