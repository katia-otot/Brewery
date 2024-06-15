import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryMenusComponent } from './brewery-menus.component';

describe('BreweryMenusComponent', () => {
  let component: BreweryMenusComponent;
  let fixture: ComponentFixture<BreweryMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreweryMenusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreweryMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
