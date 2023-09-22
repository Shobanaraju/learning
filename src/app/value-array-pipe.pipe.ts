import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueArrayPipe'
})
export class ValueArrayPipePipe implements PipeTransform {

  transform(objects : any = []) {
    return Object.values(objects);
  }

}
