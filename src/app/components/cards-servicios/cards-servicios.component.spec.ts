import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsServiciosComponent } from './cards-servicios.component';

describe('CardsServiciosComponent', () => {
  let component: CardsServiciosComponent;
  let fixture: ComponentFixture<CardsServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
