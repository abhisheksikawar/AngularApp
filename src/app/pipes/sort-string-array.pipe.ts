import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortStringArray'
})
export class SortStringArrayPipe implements PipeTransform {

  transform(value: string[], args: string): unknown {
    if(args=="asc")
    {
      return value.sort();
    }
    if(args=="dsc")
    {
      return value.sort().reverse();
    }
    return value;
  }

}
