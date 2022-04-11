import { Component, OnInit, Input } from '@angular/core';
import{Quote} from '../quote';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
 
@Input() quote:Quote
  constructor() { }

  ngOnInit(): void {
  }

}
