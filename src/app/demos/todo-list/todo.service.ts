import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';
import { Store } from './todo.store';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TasksService {

  constructor(
    private http: HttpClient,
    private store: Store
    ) { }

  getTodoList$: Observable<Task[]> = this.http
    .get<Task[]>('http://localhost:3000/todolist')
    .pipe(tap(next => this.store.set('todolist', next)));


  toggle(event: any) {
    this.http.put(`http://localhost:3000/todolist/${event.task.id}`, event.task)
    .subscribe(() => {
      const value = this.store.value.todolist;

      const todolist = value.map((task: Task) => {
        if (event.task.id === task.id) {
          return { ...task, ...event.task };
        } else {
          return task;
        }
      });

      this.store.set('todolist', todolist);
    })
  }

  saveNewTask(task: string): Observable<any> {
    const params = {
      nome: task,
      iniciado: false,
      finalizado: false
    }
    return this.http.post(`http://localhost:3000/todolist/`, params)
    .pipe(map(res => {
      const value = this.store.value.todolist;

      value.push(<Task>res)
      this.store.set('todolist', value)
    })
    );
  }
}
