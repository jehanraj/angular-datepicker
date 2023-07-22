import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'nz-demo-date-picker-format',
  template: `
<section style="padding:5rem">
    <nz-date-picker [(ngModel)]	="cDate" [nzFormat]="dateFormat"></nz-date-picker>
  <br>
    Selected Date is : {{ getLocalDate()}}
    <br />
    {{getFormat()}}
    </section>
  `,
  styles: [
    `
      nz-date-picker,
      nz-range-picker {
        margin: 0 8px 12px 0;
      }
    `,
  ],
})
export class NzDemoDatePickerFormatComponent {
  dateFormat = 'dd/MM/yyyy';
  monthFormat = 'yyyy/MM';
  private cDate: Date;

  getLocalDate(): string {
    if (this.cDate !== undefined && this.cDate !== null)
      return this.cDate.toLocaleDateString();
    return '';
  }
  getFormat(): string {
    if (this.cDate !== undefined && this.cDate !== null)
      return getDateFormat(this.cDate.toLocaleDateString());
    return '';
  }
}
function getDateFormat(dateString) {
  const formats = [
    'YYYY-MM-DD',
    'DD-MM-YYYY',
    'MM-DD-YYYY',
    'YYYY/MM/DD',
    'DD/MM/YYYY',
    'MM/DD/YYYY',
  ];

  for (let i = 0; i < formats.length; i++) {
    const format = formats[i];
    if (moment(dateString, format, true).isValid()) {
      return format;
    }
  }

  return null;
}
