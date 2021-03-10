import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  
})
export class SearchPage {
  
  element: HTMLElement;
  constructor(public navCtrl: NavController, public navParams: NavParams,) {

  }
  
  public onSubmitSearch()
  {
    this.element = document.getElementById('errorSearch') as HTMLElement;
    this.element.style.display = "block";
  }

  public onClickSearch()
  {
    this.element = document.getElementById('errorSearch') as HTMLElement;
    this.element.style.display = "none";
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
          //<img src="../../assets/srchFile.gif">
}

