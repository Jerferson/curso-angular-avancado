import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutosResolve } from "./service/produto.resolve";

export const rootRouterConfig: Routes = [
  { path: '', component: ProdutoAppComponent,
      children: [
        { path: '', redirectTo: 'todos'},
        { path: 'editar/:id', component: EditarProdutoComponent },
        {
          path: ':estado',
          component: ProdutoDashboardComponent,
          resolve: {
            produtos: ProdutosResolve
          }
        }
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
