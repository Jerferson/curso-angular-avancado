import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '../../todo.store';


@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html'
})
export class TasksFinalizadasComponent implements OnInit {

  finalizados$: Observable<any[]>;

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.finalizados$ = this.store.getTodoList().pipe(
      map(todolist => {
       return todolist.filter(task => task.finalizado)
      })
    )
  }
}
