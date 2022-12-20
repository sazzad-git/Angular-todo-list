import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo-list';

  list: any[] = [];
  addTask(item: string) {
    this.list.push({ id: this.list.length, task: item });
  }
  removeTask(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
    console.warn(id);
  }
}
