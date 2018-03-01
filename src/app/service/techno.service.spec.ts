import { TestBed, inject } from '@angular/core/testing';

import { TechnoService } from './techno.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TechnoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TechnoService]
    });
  });

  it('should be created', inject([TechnoService], (service: TechnoService) => {
    expect(service).toBeTruthy();
  }));
});
