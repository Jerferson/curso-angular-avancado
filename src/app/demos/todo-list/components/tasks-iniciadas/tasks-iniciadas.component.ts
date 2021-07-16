import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit {

  iniciados$: Observable<any[]>;

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.iniciados$ = this.store.getTodoList().pipe(
      map(todolist => todolist.filter(task => task.iniciado && ! task.finalizado))
    )
  }
}
