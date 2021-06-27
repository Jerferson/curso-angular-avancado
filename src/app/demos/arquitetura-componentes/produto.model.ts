import { CommonModule, registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";
import { CardDetalheComponent } from "./produto-dashboard/card-detalhe/card-detalhe.component";
import { CountProdutoComponent } from "./produto-dashboard/count-produto/count-produto.component";

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    CardDetalheComponent,
    CountProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: []
})

export class ProdutoModule { }
