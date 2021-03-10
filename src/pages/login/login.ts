import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

export class MyClass{
  public log = false;
  constructor() {
      this.log = false;
  }

  getMyValue() {
      return this.log;
  }

  incrementMyValue(tof){
      this.log = tof;
 }
}
