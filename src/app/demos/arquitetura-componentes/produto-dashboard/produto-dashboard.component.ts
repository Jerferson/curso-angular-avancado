import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  produtos: Produto[] = [{
    id: 1,
    nome: 'Teste',
    ativo: true,
    valor: 100,
    imagem: 'celular.jpg'
  }, {
    id: 2,
    nome: 'Teste 2',
    ativo: true,
    valor: 200,
    imagem: 'gopro.jpg'
  }, {
    id: 3,
    nome: 'Teste 3',
    ativo: true,
    valor: 300,
    imagem: 'laptop.jpg'
  },
  {
    id: 4,
    nome: 'Teste 4',
    ativo: true,
    valor: 400,
    imagem: 'mouse.jpg'
  }, {
    id: 5,
    nome: 'Teste 5',
    ativo: true,
    valor: 500,
    imagem: 'teclado.jpg'
  }, {
    id: 6,
    nome: 'Teste 6',
    ativo: false,
    valor: 600,
    imagem: 'headset.jpg'
  }];

  constructor() { }

  ngOnInit() {
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
