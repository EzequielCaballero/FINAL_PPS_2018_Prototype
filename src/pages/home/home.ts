import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//PAGES
import { ConfigPage } from '../config/config';
//LANGUAGE PACKAGE
import { text } from '../../assets/data/language_package';
//SERVICES
import { DateTimeProvider } from '../../providers/date-time/date-time';
import { SoundsProvider } from '../../providers/sounds/sounds';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //SPINNER
  showSpinner:boolean;

  //ATRIBUTES
  language:any;
  date:string;
  hour:string;
  monthNames: string[];
  monthShortNames: string[];
  daysNames: string[];
  daysShortNames: string[];

  constructor(public navCtrl   : NavController,
              public navParams : NavParams,
              private storage  : Storage,
              private _dateTime: DateTimeProvider,
              private _sounds  : SoundsProvider) {

      this.showSpinner = true;
      this.initialized();

  }

  ionViewDidLoad() {

  }

  initialized(){
    this.showSpinner = true;
    this.storage.get('language')
      .then((lang)=>{
        if(lang !== null){
          console.log("LANGUAGE: " + lang);
          this.language = lang;
          this._dateTime.initialized(lang.code);
        }
        else{
          if(this.navParams.data.language !== undefined){
            this.language = this.navParams.data.language;
            this._dateTime.initialized(this.navParams.data.language.code);
          }
          else{
            // BY DEFAULT
            this.language = text.language.es;
            this._dateTime.initialized('es');
          }
        }
      })
      .catch((error)=>{ console.log("Error al leer storage: " + error);
      })
      .then(()=>{
        console.log("Lenguaje: " + JSON.stringify(this.language));
        this.monthNames = this._dateTime.getMonthNames();
        this.daysNames = this._dateTime.getWeekDays();
        this.date = this._dateTime.getDate();
        console.log("DATE: " + this.date);
        this.hour = this._dateTime.getHour();
        console.log("HOUR: " + this.hour);
        this.showSpinner = false;
      })
  }

  soundEffect(){
    this._sounds.reproducirSonido(this._sounds.get_soundClick());
  }

  showConfig(){
    this._sounds.reproducirSonido(this._sounds.get_soundClick());
    this.navCtrl.push(ConfigPage, { 'language':this.language });
  }

}
