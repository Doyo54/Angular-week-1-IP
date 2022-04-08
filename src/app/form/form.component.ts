import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  onPost(name: HTMLInputElement, author: HTMLInputElement, quote: HTMLInputElement, date: HTMLInputElement): boolean {
     console.log(`Adding article title: ${name.value} and link: ${author.value}`);
     return false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
