import { Component, Input, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


/**
 * Generated class for the ProdutosCComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'produtos-c',
  templateUrl: 'produtos-c.html'
})
export class ProdutosCComponent {
  element: HTMLElement;
  arrowU: HTMLElement;
  arrowD: HTMLElement;


  clicked : boolean;
  degreeStyle : any;
  text: string;
@Input() productName: Array<any>;
  categoriaName: string;

  constructor() {
    console.log('Hello ProdutosCComponent Component');
    this.text = 'Hello World';
  }


  toggleSection(i) {
    console.log("Clicado");
    
    this.element = document.getElementById('Price' + i) as HTMLElement;
    this.arrowD = document.getElementById('DD1' + i) as HTMLElement;
    this.arrowU = document.getElementById('DD2' + i) as HTMLElement;


    if(this.element.hidden){
      this.element.hidden = false;
      this.arrowU.hidden = true;
      this.arrowD.hidden = false;




    }else{
      this.element.hidden = true;
      this.arrowU.hidden = false;
      this.arrowD.hidden = true;
    }
    
  }

}
