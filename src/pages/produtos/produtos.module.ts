import { ProdutosCComponent } from './../../components/produtos-c/produtos-c';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';

@NgModule({
  declarations: [
    ProdutosPage,
    ProdutosCComponent
  ],
  imports: [
    IonicPageModule.forChild(ProdutosPage)
  ],
})
export class ProdutosPageModule {
  

  
}
