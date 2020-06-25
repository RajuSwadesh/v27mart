import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,private storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  getToken()
  {
   var userdata=(localStorage.getItem('api_token'));
   return userdata;
  }

}
