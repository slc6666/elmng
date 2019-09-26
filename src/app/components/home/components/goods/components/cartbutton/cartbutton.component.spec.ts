import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbuttonComponent } from './cartbutton.component';

describe('CartbuttonComponent', () => {
  let component: CartbuttonComponent;
  let fixture: ComponentFixture<CartbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
