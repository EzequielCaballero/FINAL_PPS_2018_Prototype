import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//PAGES
import { ConfigPage } from '../config/config';
//LANGUAGE PACKAGE
import { text } from '../../assets/data/language_package';
//SERVICES
import { DateTimeProvider } from '../../providers/date-time/date-time';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //ATRIBUTES
  language:any;
  date:string;
  hour:string;
  monthNames: string[];
  monthShortNames: string[];
  daysNames: string[];
  daysShortNames: string[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _dateTime: DateTimeProvider) {

      if(this.navParams.data.language !== undefined){
        this.language = this.navParams.data.language;
        this._dateTime.initialized(this.navParams.data.language.code);
      }
      else{
        this.language = text.language.es;
        this._dateTime.initialized('es');
      }
      console.log("Lenguaje: " + JSON.stringify(this.language));
      this.monthNames = _dateTime.getMonthNames();
      this.daysNames = _dateTime.getWeekDays();
      this.daysShortNames = _dateTime.getWeekDaysShort();
      this.monthShortNames = _dateTime.getMonthNamesShort();
      this.date = _dateTime.getDate();
      console.log("DATE: " + this.date);
      this.hour = _dateTime.getHour();
      console.log("HOUR: " + this.hour);
  }

  ionViewDidLoad() {

  }

  mostrarConfig(){
    this.navCtrl.push(ConfigPage, { 'language':this.language });
  }

}
