import { ViewChild } from '@angular/core';
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { TasksService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
  @Output()
  toggle = new EventEmitter<any>();

  @ViewChild('new', {static: false}) inputEl: ElementRef;

  newTask: string = '';

  constructor(
    private tasksService: TasksService
  ) {}

  createTask() {
    this.tasksService.saveNewTask(this.newTask).subscribe(res => {
      this.toggle.emit();
      this.newTask = '';
      this.inputEl.nativeElement.focus();
    })
  }
}
