import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthProvider} from '../auth/auth';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  //Base_Url="https://laravel.gowebbidemo.com/demoMeroStuff/public/api/v1";
  Base_Url="https://v27market.com/api/v1";

  constructor(public http: HttpClient,public auth:AuthProvider) {
    console.log('Hello ApiProvider Provider');
    console.log("-----------gettoken------------");
    console.log(this.auth.getToken());
  }


  public POST(url:string , PostData:any, token:any=null){
    let base = this;
    let URL = base.Base_Url+url;
    console.log(URL)
    let httpHeaders = new HttpHeaders({
      'Accept' : 'application/json',
      'authorization' : "Bearer "+base.auth.getToken()
    });
    let options = {
      headers: httpHeaders
    };

    return new Promise(function (resolve, reject) {
      base.http.post(URL, PostData, options)
        .subscribe(
          data => {
            console.log(URL, data);
            resolve(data)
          },
          error => {
            reject(error)
          }
        );
    })
  }


  public GET(url:string)
  {
    let base=this;
    let URL= base.Base_Url+url;
    let httpHeaders = new HttpHeaders({
      'Accept' : 'application/json',
      'authorization' : "Bearer "+base.getToken()
    });
    let options = {
      headers: httpHeaders
    };

    return new Promise((resolve,reject)=>{
      base.http.get(URL,options).subscribe(data=>{
        console.log(data);
        resolve(data)
      },
      error=>{
        console.log(error)
        reject(error)
      })
    })
  }


  get(url)
  {
    let base=this;
    console.log(url)
    let URL= base.Base_Url+url;
    console.log(URL)
    // let httpHeaders = new HttpHeaders({
    //   'Accept' : 'application/json',
    //   'authorization' : "Bearer "+base.auth.getToken()
    // });
    // let options = {
    //   headers: httpHeaders
    // };

    return new Promise((resolve,reject)=>{
      base.http.get(URL).subscribe(data=>{
        console.log(data)
        resolve(data)
      },
      error=>{
        console.log(error)
        reject(error)
      })
    })
  }

  getToken(){
    if(localStorage.getItem('api_token') == null || localStorage.getItem('api_token') == ""){
      return '';
    }else{
      console.log('My Data',localStorage.getItem('api_token'));
      return localStorage.getItem('api_token');
      //return JSON.parse(userData).api_token;
    }
  }

  getCartID(){
    if(localStorage.getItem('CartID') == null || localStorage.getItem('CartID') == ""){
      const id = new Date().valueOf().toString();
      localStorage.setItem('CartID', id);
      return id;
    } else {
      return localStorage.getItem('CartID');
    }
  }
}
