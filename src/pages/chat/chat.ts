import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
 infos : any;
 chatList : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service : ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.service.LoaderShowmsg("Chat loading..");
    firebase.database().ref('users').on("value",getDets=>{
      console.log(getDets.val());
      this.infos = [];
      this.infos = this.retriveDets(getDets);
      console.log(this.infos);
      this.service.LoaderHide();
    })
  }

  retriveDets(getDets){
    let returnArr = [];
    getDets.forEach(snapshot=>{
      let item = snapshot.val();
      console.log(item.api_token);
      item.key = snapshot.key;
      if(item.api_token != localStorage.getItem('api_token')){
      returnArr.push(item);
      }
    })
    return returnArr;
  }

  chat2(inf){
    console.log(inf);
    firebase.database().ref('users').orderByChild('mobile').equalTo(inf.mobile).on("value",(data)=>{
      console.log(data.val());
      this.chatList = [];
      this.chatList = this.retriveData(data)
      console.log(this.chatList);
      this.navCtrl.push('ChatMessagePage',{passInfo:this.chatList[0]});
    })
  }

  retriveData(data){
    let returnArr = [];
    data.forEach(snapshots => {
      let item = snapshots.val();
       console.log(item);
      item.key = snapshots.key;
      // console.log(item.key);
        returnArr.push(item);
    });
    return returnArr;
}

}
