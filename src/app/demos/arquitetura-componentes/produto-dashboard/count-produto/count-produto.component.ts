import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-count-produto',
  templateUrl: './count-produto.component.html',
  styles: []
})
export class CountProdutoComponent implements OnInit {
  @Input()
  produtos: Produto[];
  constructor() { }

  ngOnInit() {
  }

  contadorAtivos(): number {
    if (!this.produtos) return;

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }
}
