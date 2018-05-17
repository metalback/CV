import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.css']
})
export class FoundationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(document).foundation();
  }

}
