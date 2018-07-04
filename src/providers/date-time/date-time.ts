import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateTimeProvider {

  constructor() {
    console.log('Hello DateTimeProvider Provider');
    moment.locale('es');
  }

  //RETORNA: días completos de la semana
  getWeekDays(): string[] {
    return moment.weekdays();
  }

  //RETORNA: días de la semana (diminutivo)
  getWeekDaysShort(): string[]{
    return moment.weekdaysShort();
  }

  //RETORNA: meses del año
  getMonthNames(): string[] {
    return moment.months();
  }

  //RETORNA: meses del año (diminutivo)
  getMonthNamesShort(){
    return moment.monthsShort();
  }

  //RETORNA: fecha actual (día + mes + año)
  getDate(){
    return moment().format("YYYY-MM-DD");
  }

  //RETORNA: hora actual
  getHour(){
    return moment().format('LTS');
  }
}
