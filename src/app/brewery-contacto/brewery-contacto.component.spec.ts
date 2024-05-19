import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryContactoComponent } from './brewery-contacto.component';

describe('BreweryContactoComponent', () => {
  let component: BreweryContactoComponent;
  let fixture: ComponentFixture<BreweryContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreweryContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreweryContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
