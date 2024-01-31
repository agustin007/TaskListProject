import { Component } from '@angular/core';
import { Task } from '../models/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  tasks: any[] = [];
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      completed: false
    });
  }

  ngOnInit() {
    // Cargar tareas desde el localStorage al inicializar el componente
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

  addTask(): void {
    if (this.taskForm.valid) {
      this.tasks.push({ name: this.taskForm.value.name, completed: false });
      this.taskForm.reset();
      this.saveTasks(); // Guardar tareas después de agregar una nueva tarea
    }
  }

  markTask(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks(); // Guardar tareas después de marcar/desmarcar una tarea
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks(); // Guardar tareas después de eliminar una tarea
  }

  private saveTasks(): void {
    // Guardar las tareas en el localStorage
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}