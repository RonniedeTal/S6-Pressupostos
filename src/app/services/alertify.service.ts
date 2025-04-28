import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}
  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  message(message: string) {
    alertify.message(message);
  }

  success(message: string) {
    alertify.success(message);
  }

  alert(message: string) {
    alertify.alert(message);
  }
}
