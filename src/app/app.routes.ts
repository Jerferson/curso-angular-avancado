import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';

export const rootRouterConfig: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'cadastro', component: CadastroComponent },
	{ path: 'sobre', component: SobreComponent },
	{
		path: 'produtos', loadChildren: () => import('./demos/arquitetura-componentes/produto.model')
			.then(m => m.ProdutoModule)
	}
];


@NgModule({
	imports: [
		RouterModule.forRoot(rootRouterConfig)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
