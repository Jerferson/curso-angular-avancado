import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";

@NgModule({
  declarations: [
    ProdutoDashboardComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: []
})

export class ProdutoModule { }
