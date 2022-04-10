import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  quotes = [
    new Quote ('Doyo','Watch finding Nemo','yo', new Date),
     new Quote ('Doyo','Watch finding Nemo', 'hi', new Date),
  ]
  addQuote(theQuote) {
    this.quotes.push(theQuote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
