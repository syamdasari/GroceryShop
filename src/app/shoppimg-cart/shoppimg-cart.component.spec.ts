import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppimgCartComponent } from './shoppimg-cart.component';

describe('ShoppimgCartComponent', () => {
  let component: ShoppimgCartComponent;
  let fixture: ComponentFixture<ShoppimgCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppimgCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppimgCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
