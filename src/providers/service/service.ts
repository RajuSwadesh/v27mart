import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController} from 'ionic-angular';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  private Loaders : any;
  constructor(public http: HttpClient,private toastCtrl: ToastController,public loadingCtrl: LoadingController,public alertCtrl:AlertController) {
    console.log('Hello ServiceProvider Provider');
  }

  public Success(Message){
    let toast = this.toastCtrl.create({
      message: Message,
      duration: 4000,
      position: 'top',
      showCloseButton:true,
      cssClass:'successToast'
    });
    toast.present();
  }

  public Warning(Message){
    let toast = this.toastCtrl.create({
      message: Message,
      duration: 4000,
      position: 'top',
      showCloseButton:true,
      cssClass:'warningToast'
    });
    toast.present();
  }

 
    public LoaderShow(){
      this.Loaders = this.loadingCtrl.create({
        spinner : 'bubbles',
        cssClass : 'process',
        //content: Message
      });
      this.Loaders.present()
    }

    public LoaderShowmsg(Message){
      this.Loaders = this.loadingCtrl.create({
        spinner : 'bubbles',
        cssClass : 'process',
        content: Message
      });
      this.Loaders.present()
    }
  
     public LoaderHide(){
      this.Loaders.dismiss();
    }


}
