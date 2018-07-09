import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
//SERVICES
import { SoundsProvider } from '../sounds/sounds';

@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController,
              public _soundsSrv: SoundsProvider) {

  }

  //SUCCESS MSG
  public showToast(msg : string, dismissFunction?: any) {

    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass:'success-toast'
    });
    toast.onDidDismiss((dismissFunction) ? dismissFunction() : "" );
    toast.present();
    //SONIDO
    this._soundsSrv.reproducirSonido(this._soundsSrv.get_soundSuccess());
  }

  //ERROR MSG
  public showErrorToast(msg : string, dismissFunction?: any) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass:'error-toast'
    });
    toast.onDidDismiss((dismissFunction) ? dismissFunction() : "" );
    toast.present();
    //SONIDO
    this._soundsSrv.reproducirSonido(this._soundsSrv.get_soundError());
  }

  //WARNINg MSG
  public showWarningToast(msg : string, dismissFunction?: any) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass:'warning-toast'
    });
    toast.onDidDismiss((dismissFunction) ? dismissFunction() : "" );
    toast.present();
    //SONIDO
    this._soundsSrv.reproducirSonido(this._soundsSrv.get_soundWarning());
  }

}
