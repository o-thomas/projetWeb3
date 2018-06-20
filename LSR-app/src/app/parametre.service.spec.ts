import { TestBed, inject } from '@angular/core/testing';

import { ParametreService } from './parametre.service';

describe('ParametreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParametreService]
    });
  });

  it('should be created', inject([ParametreService], (service: ParametreService) => {
    expect(service).toBeTruthy();
  }));
});
