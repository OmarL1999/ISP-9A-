import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationUser'
})
export class ValidationUserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
