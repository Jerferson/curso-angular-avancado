import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';


@Component({
  selector: 'app-card-detalhe',
  templateUrl: './card-detalhe.component.html',
  styles: []
})
export class CardDetalheComponent implements OnInit {
  @Input()
  produto: Produto;

  constructor() { }

  ngOnInit() {
  }

}
