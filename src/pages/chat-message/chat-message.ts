import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ActionSheetController, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions,CameraPopoverOptions } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';
/**
 * Generated class for the ChatMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-message',
  templateUrl: 'chat-message.html',
})
export class ChatMessagePage {
  @ViewChild('content') content: Content;
 dets : any;
 chatUserId : any;
 name : any;
 message : any = '';
 token : any;
 infos : any;
 ownerId : any;
 fetchMsg : any;
 messageList : any;
 messageLength : any;
 infos2 : any;

 cameraSetting : CameraOptions = {
  quality: 100,
  sourceType : 1,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  //targetWidth:500,
   // targetHeight:500,
  allowEdit:true
  };
  cameraSettingGallery : CameraOptions = {
  quality: 100,
  sourceType : 2,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  //targetWidth:500,
  //targetHeight:500,
  allowEdit:true
  };

  photo : any;
  image : any;
  base64Image : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service : ServiceProvider,
    public zone : NgZone,private camera: Camera,private storage: NativeStorage,public actionSheetCtrl: ActionSheetController,
    public loadingCtrl : LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatMessagePage');
    console.log(localStorage.getItem('api_token'));
    this.token = localStorage.getItem('api_token');
    firebase.database().ref('users').orderByChild('api_token').equalTo(this.token).on("value",userDets=>{
      console.log(userDets.val());
      this.infos = [];
      this.infos = this.retriveData(userDets);
      console.log(this.infos);
      if(this.infos[0]!= undefined){
      this.ownerId = this.infos[0].id;
      }else{
        this.service.Warning("Please re signup for use chatting feature!!");
        this.navCtrl.push('CategoriesPage');
      }
    })
    this.dets = this.navParams.get('passInfo');
    console.log(this.dets);
    if(this.dets != undefined){
    this.chatUserId = this.dets.id;
    console.log(this.chatUserId);
    this.name = this.dets.name;
    console.log(this.name);
  }else{
    this.navCtrl.push('ChatPage');
  }

  this.fetchMsg = this.fetchChat().subscribe((res:any)=>{
    setTimeout(()=>{

    },1000);
    this.zone.run(()=>{
      this.messageList = res;
      this.messageLength = this.messageList.length;
      console.log(this.messageList);
      this.scrollto();
    })
  })
  firebase.database().ref('users').on("value",check=>{
    this.infos2 = [];
    this.infos2 = this.retriveData(check);
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

scrollto() {
  setTimeout(() => {
    this.content.scrollToBottom();
  }, 1000);
}

  sendMessage(){
    console.log(this.message);
    if(this.message == undefined || this.message == ''){
      this.service.Warning("Cannot send empty message!!");
    }else{
      console.log(this.message);
      console.log(this.ownerId);
      console.log(this.chatUserId);
      firebase.database().ref('user_chat/'+this.ownerId+'/'+this.chatUserId+'/').push({
        class:'my-message',
        message:this.message,
        sentBy:this.ownerId,
        imageurl:"",
        timestamp:firebase.database.ServerValue.TIMESTAMP
      }).then(()=>{
        console.log(this.message);
        firebase.database().ref('user_chat/'+this.chatUserId+'/'+this.ownerId+'/').push({
          class:'other-message',
          message:this.message,
          imageurl:"",
          sentBy: this.chatUserId,
          timestamp:firebase.database.ServerValue.TIMESTAMP
        }).then(()=>{
          this.message = '';
        })
      })
    }
    this.scrollto();
  }

  fetchChat(){
    return new Observable(observer=>{
      firebase.database().ref('user_chat/'+this.ownerId+'/'+this.chatUserId).on("value",data=>{
        var val = data.val();
        console.log(val);
        var array = [];
        for(var i in val){
          array.push(val[i])
        }
        observer.next(array);
      })
    })
  }

  attachFile(){
    let base = this;
		let actionSheet = this.actionSheetCtrl.create({
		  title: 'Upload Image from Photo Gallery',
		  buttons: [
			{
			  text: 'Upload Image from Gallery',
			  icon: 'image',
			  handler: () => {
          let loading = this.loadingCtrl.create({
            content: 'Please wait...'
          });
        
          //loading.present();
				base.getImage(base.cameraSettingGallery).then((res:any)=>{
         
          console.log(res);
          base.photo = res;

          firebase.database().ref('user_chat/'+this.ownerId+'/'+ this.chatUserId+'/').push({
            class:'my-message',
            message:"",
            imageurl:res,
            sentBy:this.ownerId,
            timestamp:firebase.database.ServerValue.TIMESTAMP
          }).then(()=>{
            console.log(this.message);
            firebase.database().ref('user_chat/'+ this.chatUserId+'/'+this.ownerId+'/').push({
              class:'other-message',
              message:"",
              imageurl:res,
              sentBy: this.chatUserId,
              timestamp:firebase.database.ServerValue.TIMESTAMP
            }).then(()=>{
    
               this.message = '';
            });
    
    
        });
        })
			  }
			},
			{
			  text: 'Upload Image from Camera',
			  icon: 'camera',
			  handler: () => {
          let loading = this.loadingCtrl.create({
            content: 'Please wait...'
          });
        
         // loading.present();
				base.getImage(base.cameraSetting).then((res:any)=>{
          console.log(res);
          base.photo = res;
          firebase.database().ref('user_chat/'+this.ownerId+'/'+ this.chatUserId+'/').push({
            class:'my-message',
            message:"",
            imageurl:res,
            sentBy:this.ownerId,
            timestamp:firebase.database.ServerValue.TIMESTAMP
          }).then(()=>{
            console.log(this.message);
            firebase.database().ref('user_chat/'+ this.chatUserId+'/'+this.ownerId+'/').push({
              class:'other-message',
              message:"",
              imageurl:res,
              sentBy: this.chatUserId,
              timestamp:firebase.database.ServerValue.TIMESTAMP
            }).then(()=>{
    
               this.message = '';
            });
    
    
        });
				  // base.datas.push({
				
					// imageurl:res,
					// timestamp:firebase.database.ServerValue.TIMESTAMP
          // })
          // console.log(base.user_id);
          //  if(base.photo != null){
          //    this.navCtrl.push("AttachfilePage",{photo:base.photo,chatUserId:base.chatUserId});
          //  }
        //  loading.dismiss();
        })
       // loading.dismiss();
			  }
			},
			{
			  text: 'Cancel',
			  role: 'cancel',
			  handler: () => {
        console.log('Cancel clicked');
       
        }
        
      }
      
      ]
      
		});

		actionSheet.present();
  }

  getImage(options){
    let base = this;
    return new Promise((resolve,reject)=>{
      base.camera.getPicture(options).then((imageData) => {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
      
        loading.present();
        this.base64Image = "data:image/png;base64,"+imageData;
        console.log(this.base64Image)
        let imgName=this.newGuid()+'document.jpg';
        this.uploadImage(imageData,imgName).then((url: any)=>{
          loading.dismiss();
          resolve(url)
        })
        // console.log(imageData());
        this.image = imageData;
      }, (err) => {
        console.log(err)
        // Handle error
      });
    })
  }

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public uploadImage(blobData : any, ImageName : any){
    //let base = this;
    return new  Promise(function (resolve, reject) {
      let storageRef = firebase.storage().ref('assets/AttachFile');
      let ref = storageRef.child(ImageName);
      ref.putString(blobData, 'base64', {contentType: 'image/jpeg'}).then(function (snapshot: any) {
        ref.getDownloadURL().then((url)=>{
          resolve(url)
        })
      }, function (error: any) {
        reject({
          status : "failed",
          URL : error.code
        });
      });
    });
  }
 

}
