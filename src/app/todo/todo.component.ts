import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Todo[] = [];
  newTask: string;
  constructor() { }

  ngOnInit() {
    this.tasks = [{
      task: 'Do laundry',
      status: 'Active'
    }, {
      task: 'Go for jogging',
      status: 'Active'
    }, {
      task: 'Complete Assignment',
      status: 'Active'
    }]
  }

  markDone(item: any) {
    item.status = 'Completed';
  }

  sortedTasks(): Todo[] {
    return this.tasks.sort((a: Todo, b: Todo) => {
      return a.status > b.status ? 1 : -1;
    });
  }

  onKeyPress(event) {
    if (event.code == 'Enter' && this.newTask.trim()) {
      this.tasks.push({
        task: this.newTask,
        status: 'Active'
      });
      this.newTask = '';
      event.target.blur();
    }
  }

  removeItem(index) {
    this.tasks.splice(index, 1);
  }

}
