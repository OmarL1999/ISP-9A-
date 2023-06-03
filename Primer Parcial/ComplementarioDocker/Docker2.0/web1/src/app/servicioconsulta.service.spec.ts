import { TestBed } from '@angular/core/testing';

import { ServicioconsultaService } from './servicioconsulta.service';

describe('ServicioconsultaService', () => {
  let service: ServicioconsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioconsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
