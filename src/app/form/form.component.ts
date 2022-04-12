import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Quote } from '../../app/quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote:string
  newName:string
  newAuthor:string
  newDate:Date
  theWords:any
  
@Output() emitQuote= new EventEmitter()

// function to add form input on to the page //
  onPost(){
    if(!this.newName || !this.newAuthor || !this.newQuote || !this.newDate) {
      alert('Please fill in all boxes')
    }else{
      this.theWords = new Quote(this.newName,this.newAuthor,this.newQuote, this.newDate)
      this.newQuote=''
      this.newAuthor=''
      this.newName=''
      let display = this.emitQuote.emit(this.theWords)
      console.log('hi')
    return display;
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
