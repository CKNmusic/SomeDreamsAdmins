import { Component, ErrorHandler } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  public apps: any;
  public resposta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.GetProdutos();
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }


  async doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      //location.reload();
      this.GetProdutos();
      event.complete();
    }, 3000);
  }
  

  public GetProdutos() {
    this.http.get('http://mo-1.vyperhost.xyz:10006/api/produto').map(res => res.json()).subscribe(data => {
      console.log(data);
      this.resposta = data;
  });
}





}
