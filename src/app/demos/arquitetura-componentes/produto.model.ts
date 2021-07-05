import { CommonModule, registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";
import { CardDetalheComponent } from "./produto-dashboard/card-detalhe/card-detalhe.component";
import { CountProdutoComponent } from "./produto-dashboard/count-produto/count-produto.component";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoService } from "./service/produto.service";

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    CardDetalheComponent,
    CountProdutoComponent,
    EditarProdutoComponent,
    ProdutoAppComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  providers: [
    ProdutoService
  ],
  exports: []
})

export class ProdutoModule { }
