import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

//ENVIRONMENT CONFIGURATION
import { environment } from '../environments/environment';
//GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';
// PAGES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfigPage } from '../pages/config/config';
//SERVICES
import { GeocodingProvider } from '../providers/geocoding/geocoding';
import { DateTimeProvider } from '../providers/date-time/date-time';
//STORAGE (NATIVE)
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
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
    GeocodingProvider,
    DateTimeProvider
  ]
})
export class AppModule {}
