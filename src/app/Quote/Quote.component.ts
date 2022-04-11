import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-Quote',
  templateUrl: './Quote.component.html',
  styleUrls: ['./Quote.component.css']
})
export class LandingPageComponent implements OnInit {
  quotes = [
     new Quote ('Sarah','Benjamin Franklin', 'Tell me and I forget. Teach me and I remember. Involve me and I learn', new Date(2020,2,1)),
  ]
  voteUp(i) {
    this.quotes[i].votesUp ++;
  }
  voteDown(i) {
    this.quotes[i].votesDown ++;
  }
  delQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
  }
}
  addQuote(theQuote) {
    this.quotes.push(theQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
