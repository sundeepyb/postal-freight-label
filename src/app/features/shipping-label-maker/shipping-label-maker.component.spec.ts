import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLabelMakerComponent } from './shipping-label-maker.component';

describe('ShippingLabelMakerComponent', () => {
  let component: ShippingLabelMakerComponent;
  let fixture: ComponentFixture<ShippingLabelMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingLabelMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingLabelMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
