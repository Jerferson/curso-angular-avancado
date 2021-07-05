import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoAppComponent } from "./produto.app.component";

export const rootRouterConfig: Routes = [
  { path: '', component: ProdutoAppComponent,
      children: [
        { path: '', component: ProdutoDashboardComponent },
        { path: 'editar/:id', component: EditarProdutoComponent }
      ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(rootRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})

export class ProdutoRoutingModule { }
