import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';
import { HomePage } from '../pages/home/home';
//PROVIDERS
import { SoundsProvider } from '../providers/sounds/sounds';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;
  showSplash:boolean = true;
  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private _soundsService:SoundsProvider) {
      this.initialize();
  }

  initialize(){
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=> {
        this.showSplash = false;
        this._soundsService.reproducirSonido(this._soundsService.get_soundOpening());
      });

    });
  }

}
