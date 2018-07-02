import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//PAGINAS
import { ConfigPage } from '../config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  mostrarConfig(){
    this.navCtrl.push(ConfigPage);
  }

}
