import { TestBed } from '@angular/core/testing';

import { MenuCarritoService } from './menu-carrito.service';

describe('MenuCaritoService', () => {
  let service: MenuCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
