import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe',
  pure: true,
})
export class MyDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: any, pattern?: string): string | null {
    return this.datePipe.transform(value, pattern);
  }
}
