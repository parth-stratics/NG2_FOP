/**
 * Created by User on 9/20/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';
/*
 */
@Pipe({name: 'concatenate'})
export class ConcatenatePipe implements PipeTransform {
  transform(value: string, length: number): string {
    if ( value.length > length )
    {
      return value.substring(0,length) + "...";
    }
    return value.substring(0,length);
  }
}
