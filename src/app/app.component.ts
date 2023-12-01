import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToDoItem } from './shared/models/ToDoItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_first_angular_app';
  toDoList : ToDoItem[] = [
    new ToDoItem("Make coffee"),
    new ToDoItem("Tell Heather you love her"),
    new ToDoItem("refill coffee"),
    new ToDoItem("learn Angular"),
  ]
  toggleComplete (item : ToDoItem) {
    item.isCompleted = !item.isCompleted
    console.log(item)

  }
}
