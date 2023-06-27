import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookcard1Component } from './bookcard1.component';

describe('Bookcard1Component', () => {
  let component: Bookcard1Component;
  let fixture: ComponentFixture<Bookcard1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bookcard1Component]
    });
    fixture = TestBed.createComponent(Bookcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
