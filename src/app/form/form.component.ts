import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Quote } from '../../app/quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  newQuote:string
  newName:string
  newAuthor:string
  newDate:any
  theWords:any

  onPost(){
    this.theWords = new Quote(this.newName,this.newAuthor,this.newQuote, this.newDate)
    this.newQuote=''
    this.newAuthor=''
    this.newName=''
    this.newDate=''
    this.emitQuote.emit(this.theWords)
    console.log('hi')
    return false;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
