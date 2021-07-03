import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../../models/produto';


@Component({
  selector: 'app-card-detalhe',
  templateUrl: './card-detalhe.component.html',
  styles: []
})
export class CardDetalheComponent implements OnInit {
  @Input()
  produto: Produto;

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitirEvent() {
    this.status.emit(this.produto);
  }
}
