import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  quotes = [
    new Quote ('Dave','Nelson Mandela','The greatest glory in living lies not in never falling, but in rising every time we fall. ', new Date),
     new Quote ('Sarah','Benjamin Franklin', 'Tell me and I forget. Teach me and I remember. Involve me and I learn', new Date),
  ]
  addQuote(theQuote) {
    this.quotes.push(theQuote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
