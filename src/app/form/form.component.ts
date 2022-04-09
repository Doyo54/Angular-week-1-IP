import { Component, OnInit } from '@angular/core';
import { Quote } from '../../app/quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quotes:Quote[] = [
    { name:'Doyo', Author:'Watch finding Nemo', message:'yo'},
    {name:'Doyo', Author:'Watch finding Nemo', message:'hi'},
  ]
  onPost(name: HTMLInputElement, author: HTMLInputElement, quote: HTMLInputElement, date: HTMLInputElement): boolean {
     console.log(`Adding article title: ${name.value} and link: ${author.value}`);
     return false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
