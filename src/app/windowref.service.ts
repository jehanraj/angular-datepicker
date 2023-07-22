import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return window;
  }

  public ln = 'en';

  constructor() {
    try {
      if (
        !isNullOrUndefined(this.nativeWindow.navigator.language) &&
        this.nativeWindow.navigator.language !== ''
      ) {
        this.ln = this.nativeWindow.navigator.language;
      }
    } finally {
    }
  }
}
