/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstoqueService } from './estoque.service';

describe('Service: Estoque', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstoqueService]
    });
  });

  it('should ...', inject([EstoqueService], (service: EstoqueService) => {
    expect(service).toBeTruthy();
  }));
});
