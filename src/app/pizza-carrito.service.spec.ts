import { TestBed } from '@angular/core/testing';

import { PizzaCarritoService } from './pizza-carrito.service';

describe('PizzaCaritoService', () => {
  let service: PizzaCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
