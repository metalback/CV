import { Component, OnInit, Inject } from '@angular/core';
import { AosToken } from './aos'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(AosToken) aos) {
      aos.init();
  }
}
