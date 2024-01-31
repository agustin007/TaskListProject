import { TestBed } from '@angular/core/testing';

import { TaskStorageService } from './task-storage.service';

describe('TaskStorageService', () => {
  let service: TaskStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskStorageService], // Importante: agregar el servicio a los providers
    });
    service = TestBed.inject(TaskStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
