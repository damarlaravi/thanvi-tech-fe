import { TestBed, inject } from '@angular/core/testing';

import { TechnoService } from './techno.service';

describe('TechnoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnoService]
    });
  });

  it('should be created', inject([TechnoService], (service: TechnoService) => {
    expect(service).toBeTruthy();
  }));
});
