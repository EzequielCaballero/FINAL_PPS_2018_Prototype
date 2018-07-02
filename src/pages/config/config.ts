import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//PAGES
import { HomePage } from '../home/home';
//LANGUAGE PACKAGE
import { text } from '../../assets/data/language_package';
//SERVICE
import { GeocodingProvider } from '../../providers/geocoding/geocoding';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage implements AfterViewInit {
  @ViewChild('flag_es') flag_es:ElementRef;
  @ViewChild('flag_en') flag_en:ElementRef;
  @ViewChild('flag_ru') flag_ru:ElementRef;
  @ViewChild('flag_de') flag_de:ElementRef;
  @ViewChild('flag_fr') flag_fr:ElementRef;
  @ViewChild('flag_pt') flag_pt:ElementRef;

  //SPINNER
  mostrarSpinner:boolean = false;

  //ATRIBUTES
  language:any;
  lat:number;
  lng:number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _geoCoding:GeocodingProvider) {

      this.language = text.language.es;
      console.log("LENGUAJE: " + JSON.stringify(this.language));
      //this.mostrarSpinner = true;
  }

  ngAfterViewInit() {
        this.selectLanguage('es');
  }

  ionViewDidLoad() {
    this.lat = -34.662305;
    this.lng = -58.36472349999997;
  }

  back(){
    this.navCtrl.push(HomePage, { 'language':this.language });
  }

  selectLanguage(selection:string){
    switch(selection){
      case "es":  this.language = text.language.es;
                  this.flag_es.nativeElement.className = 'flag flag_selected';
                  this.flag_en.nativeElement.className = 'flag';
                  this.flag_ru.nativeElement.className = 'flag';
                  this.flag_de.nativeElement.className = 'flag';
                  this.flag_fr.nativeElement.className = 'flag';
                  this.flag_pt.nativeElement.className = 'flag';
                  break;

      case "en":  this.language = text.language.en;
                  this.flag_es.nativeElement.className = 'flag';
                  this.flag_en.nativeElement.className = 'flag flag_selected';
                  this.flag_ru.nativeElement.className = 'flag';
                  this.flag_de.nativeElement.className = 'flag';
                  this.flag_fr.nativeElement.className = 'flag';
                  this.flag_pt.nativeElement.className = 'flag';
                  break;

      case "ru":  this.language = text.language.ru;
                  this.flag_es.nativeElement.className = 'flag';
                  this.flag_en.nativeElement.className = 'flag';
                  this.flag_ru.nativeElement.className = 'flag flag_selected';
                  this.flag_de.nativeElement.className = 'flag';
                  this.flag_fr.nativeElement.className = 'flag';
                  this.flag_pt.nativeElement.className = 'flag';
                  break;

      case "de":  this.language = text.language.de;
                  this.flag_es.nativeElement.className = 'flag';
                  this.flag_en.nativeElement.className = 'flag';
                  this.flag_ru.nativeElement.className = 'flag';
                  this.flag_de.nativeElement.className = 'flag flag_selected';
                  this.flag_fr.nativeElement.className = 'flag';
                  this.flag_pt.nativeElement.className = 'flag';
                  break;

      case "fr":  this.language = text.language.fr;
                  this.flag_es.nativeElement.className = 'flag';
                  this.flag_en.nativeElement.className = 'flag';
                  this.flag_ru.nativeElement.className = 'flag';
                  this.flag_de.nativeElement.className = 'flag';
                  this.flag_fr.nativeElement.className = 'flag flag_selected';
                  this.flag_pt.nativeElement.className = 'flag';
                  break;

      case "pt":  this.language = text.language.pt;
                  this.flag_es.nativeElement.className = 'flag';
                  this.flag_en.nativeElement.className = 'flag';
                  this.flag_ru.nativeElement.className = 'flag';
                  this.flag_de.nativeElement.className = 'flag';
                  this.flag_fr.nativeElement.className = 'flag';
                  this.flag_pt.nativeElement.className = 'flag flag_selected';
                  break;
    }
  }

  selectLocation(event){
    this.mostrarSpinner = true;
    this._geoCoding.obtenerDireccion(event.coords.lat, event.coords.lng)
      .then((data:any)=>{
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        console.log("Dirección: " + data);
        this.mostrarSpinner = false;
      })
      .catch((error)=>{
        console.log("ERROR: al convertir coordenadas -> dirección: " + error);
      })

  }

}
