import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//PAGES
import { ConfigPage } from '../config/config';
//LANGUAGE PACKAGE
import { text } from '../../assets/data/language_package';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //ATRIBUTES
  language:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

      if(this.navParams.data.language !== undefined){
        this.language = this.navParams.data.language;
      }
      else{
        this.language = text.language.es;
      }
      console.log("Lenguaje: " + JSON.stringify(this.language));
  }

  ionViewDidLoad() {

  }

  mostrarConfig(){
    this.navCtrl.push(ConfigPage, { 'language':this.language });
  }

}
