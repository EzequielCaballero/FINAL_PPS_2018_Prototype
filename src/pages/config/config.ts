import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//PAGES
import { HomePage } from '../home/home';
//LANGUAGE PACKAGE
import { text } from '../../assets/data/language_package';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  //SPINNER
  mostrarSpinner:boolean = false;

  //ATRIBUTES
  language:any;
  lat:number;
  lng:number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

      this.language = text.language.es;
      console.log("LENGUAJE: " + JSON.stringify(this.language));
      this.mostrarSpinner = true;
  }

  ionViewDidLoad() {
    this.lat = -34.662305;
    this.lng = -58.36472349999997;
    this.mostrarSpinner = false;
  }

  back(){
    this.navCtrl.push(HomePage, { 'language':this.language });
  }

  selectLanguage(selection:string){
    switch(selection){
      case "es": this.language = text.language.es; break;
      case "en": this.language = text.language.en; break;
      case "ru": this.language = text.language.ru; break;
      case "de": this.language = text.language.de; break;
      case "fr": this.language = text.language.fr; break;
      case "pt": this.language = text.language.pt; break;
    }
  }

}
