import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { CardDetalheComponent } from './card-detalhe/card-detalhe.component';
import { CountProdutoComponent } from './count-produto/count-produto.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('title', { static: false }) mensagemTela: ElementRef;
  @ViewChild(CountProdutoComponent, { static: false }) contador: CountProdutoComponent;

  @ViewChildren(CardDetalheComponent) botoes: QueryList<CardDetalheComponent>;

  produtos: Produto[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit(): void {
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('Clicou no Título');
      return;
    });

    console.log('Objeto do contador: ', this.contador.produtos.length)

    console.log(this.botoes);

    this.botoes.forEach( p => {
      console.log(p);
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
