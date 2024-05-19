import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryPizzasComponent } from './brewery-pizzas.component';

describe('BreweryPizzasComponent', () => {
  let component: BreweryPizzasComponent;
  let fixture: ComponentFixture<BreweryPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreweryPizzasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreweryPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
