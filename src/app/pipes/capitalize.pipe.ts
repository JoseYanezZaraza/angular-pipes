import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, arg1=true): string {
        value = value.toLowerCase();
        let newName:string[] = value.split(' ');
        // console.log(value);
        console.log(newName);
        if (arg1){
            for (let i in newName){
                newName[i] = newName[i][0].toUpperCase() + newName[i].substring(1, newName[i].length);
            }
        } else {
            newName[0] = newName[0][0].toUpperCase() + newName[0].substring(1, newName[0].length);
        }
        return newName.join(' ');
    }
}