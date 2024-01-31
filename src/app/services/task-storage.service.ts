import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  constructor() { }

  private storageKey = 'tasks';

  getTasks(): Task[] {
    const tasksString = localStorage.getItem(this.storageKey);
    return tasksString ? JSON.parse(tasksString) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
