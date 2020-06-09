import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liveSearch'
})
export class LiveSearchPipe implements PipeTransform {

  transform(value: any, args?: string): unknown {
    if(!args)
    {
      return value;
    }
    return value.filter(u=>u.name.toLowerCase().includes(args.toLowerCase()));
  }

}
