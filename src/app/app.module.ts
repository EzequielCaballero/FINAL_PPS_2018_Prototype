import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

//CONFIGURACION ENVIRONMENT
import { environment } from '../environments/environment';
//GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';
// PAGINAS
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfigPage } from '../pages/config/config';
import { GeocodingProvider } from '../providers/geocoding/geocoding';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleMaps.apiKey })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeocodingProvider
  ]
})
export class AppModule {}
