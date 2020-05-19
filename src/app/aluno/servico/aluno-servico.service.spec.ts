import { TestBed } from '@angular/core/testing';

import { AlunoServicoService } from './aluno-servico.service';

describe('AlunoServicoService', () => {
  let service: AlunoServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
