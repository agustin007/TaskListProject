import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [ReactiveFormsModule], // Asegúrate de importar ReactiveFormsModule
    });

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', () => {
    const taskName = 'Task 1';
  
    component.taskForm.setValue({ name: taskName, completed: false });
  
    component.addTask();
  
    fixture.detectChanges();
  
    expect(component.tasks[0].name).toBe(taskName);
  });
  
  

  it('should mark a task as completed', () => {
    component.tasks = [{ name: 'Task 1', completed: false }];
    fixture.detectChanges();

    const checkbox = fixture.debugElement.query(By.css('input[type="checkbox"]'));
    checkbox.triggerEventHandler('change', { target: { checked: true } });
    fixture.detectChanges();

    expect(component.tasks[0].completed).toBe(true);
  });


  it('should delete a task', () => {
    component.tasks = [{ name: 'Task 1', completed: false }];
    fixture.detectChanges();
    const deleteButton = fixture.debugElement.query(By.css('.task-item button'));
    deleteButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.tasks.length).toBe(0);
  });

});
