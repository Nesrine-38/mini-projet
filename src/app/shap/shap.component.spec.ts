import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapComponent } from './shap.component';

describe('ShapComponent', () => {
  let component: ShapComponent;
  let fixture: ComponentFixture<ShapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShapComponent]
    });
    fixture = TestBed.createComponent(ShapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
