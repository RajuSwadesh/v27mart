import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the SellerRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller-registration',
  templateUrl: 'seller-registration.html',
})
export class SellerRegistrationPage {
  file_type:any=[];
  file_name:any=[];
  total_file:any=0;
 //attach_file:any=[];
  attach_file:any='';

  nick_name:any='';
  business_name:any='';
  mobile:any='';
  address1:any='';
  city:any='';
  pin:any='';
  landline:any='';
  about:any='';
  registered='false';


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceProvider,public api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerRegistrationPage');
    this.api.GET('/isSeller').then((res:any)=>{
      if(res.status=='success')
      {
        if(res.data>0)
        {
          this.registered='true';
        }
        else{
          this.registered='false';
        }
      }
      else{
        this.registered='false;'
      }
    }).catch((error)=>{
      this.service.Warning('Something went wrong. Try again later');
    })
  }

  back()
  {
    this.navCtrl.pop();
  }

  changeListener($event) : void {
    this.service.LoaderShowmsg('Please wait..');
    console.log($event)
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    console.log(inputValue.files)

    for(var i=0;i<inputValue.files.length;i++)
    {
      // if(inputValue.files[i].name.split('.')[1]=='pdf' || inputValue.files[i].name.split('.')[1]=='jpg' || inputValue.files[i].name.split('.')[1]=='jpeg' || inputValue.files[i].name.split('.')[1]=='png')
      // {
      //  // console.log(inputValue.files.name.split('.')[1]);
      //   this.service.Warning(inputValue.files[i].name.split('.')[1]+' not supported');
      //   (<HTMLInputElement>document.getElementById("upfile")).value='';
      //   console.log(i,inputValue.files.length-1)
      //   if(i==inputValue.files.length)
      //   {
      //     this.service.LoaderHide();
      //   }
      // }
      // else{
        this.getBase64(inputValue.files[i]);
     // }

    }
  }

  getBase64(file)
  {
    let base=this;
    console.log(file);
    console.log(file.name.split('.')[1])
    setTimeout(function(){
      var myReader:FileReader = new FileReader();
      var base64_data:any;
      myReader.readAsDataURL(file);
      myReader.onloadend = (e) => {
        console.log(myReader.result)
        base64_data=myReader.result;
      //  var split_data=base64_data.split(';base64,').pop();

          // base.attach_file.push(base64_data);
             base.attach_file=base64_data;
          // base.file_type.push(file.name.split('.')[1]);
          // base.file_name.push(file.name);
          // base.total_file=base.file_name.length;
           console.log(base.attach_file)
           console.log(base.file_type)
           base.service.LoaderHide();
          }
    },1000)
  }

  register()
  {
    if(this.nick_name=='')
    {
      this.service.Warning('Please enter nick name')
    }
    else if(this.business_name=='')
    {
      this.service.Warning('Please enter nick name')
    }
    else if(this.mobile=='')
    {
      this.service.Warning('Please enter mobile number')
    }
    else if(this.address1=='')
    {
      this.service.Warning('Please enter your address')
    }
    else if(this.city=='')
    {
      this.service.Warning('Please enter your city')
    }else if(this.pin=='')
    {
      this.service.Warning('Please enter your postal code')
    }
    else if(this.attach_file=='')
    {
      this.service.Warning('Please upload document..')
    }
  else{
    this.service.LoaderShowmsg('Creating seller profile..');
    this.api.POST('/SellerRegistration',{
      nick_name:this.nick_name,
      business_name:this.business_name,
      mobile:this.mobile,
      address1:this.address1,
      city:this.city,
      pin:this.pin,
      documents:this.attach_file,
      landline:this.landline,
      address2:'',
      about:this.about
    }).then((res:any)=>{
      console.log(res)
      this.service.LoaderHide();
      if(res.status=='success')
      {
        this.registered='true';
        this.service.Success(res.data);
      }
      else{
        this.service.Warning(res.data);
      }
    }).catch((error)=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later')
    })
  }
  }


  goToSeller(){

  }
}
