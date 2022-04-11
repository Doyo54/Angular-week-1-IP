import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value) //returns value in miliseconds
    var dateCounter = dateDifference/ (1000 * 3600 * 24);
  

    if (dateCounter >= 1 &&  todayWithNoTime > value){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
