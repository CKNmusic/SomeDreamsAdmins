import { LoginPage } from './../login/login';
import { MyApp } from './../../app/app.component';

import { AppModule } from './../../app/app.module';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DefaultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-default',
  templateUrl: 'default.html',
})
export class DefaultPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefaultPage');
  }

  verificarLogado(event): void{


  }

}
