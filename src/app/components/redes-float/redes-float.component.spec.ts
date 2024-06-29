import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesFloatComponent } from './redes-float.component';

describe('RedesFloatComponent', () => {
  let component: RedesFloatComponent;
  let fixture: ComponentFixture<RedesFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedesFloatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedesFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
