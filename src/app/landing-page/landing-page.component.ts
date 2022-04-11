import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  quotes = [
    // new Quote ('Dave','Nelson Mandela','The greatest glory in living lies not in never falling, but in rising every time we fall. ', new Date),
     new Quote ('Sarah','Benjamin Franklin', 'Tell me and I forget. Teach me and I remember. Involve me and I learn', new Date(2020,4,1)),
  ]
  voteUp(i) {
    this.quotes[i].votesUp ++;
  }
  voteDown(i) {
    this.quotes[i].votesDown ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  addQuote(theQuote) {
    this.quotes.push(theQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
