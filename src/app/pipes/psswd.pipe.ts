import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'psswd'
})
export class PsswdPipe implements PipeTransform {

  transform(value: string, arg1: boolean = true): any {
    return arg1? Array(value.length).fill('*').join(''): value;
  }

}
