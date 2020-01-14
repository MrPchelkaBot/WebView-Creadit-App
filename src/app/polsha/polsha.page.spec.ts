import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolshaPage } from './polsha.page';

describe('PolshaPage', () => {
  let component: PolshaPage;
  let fixture: ComponentFixture<PolshaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolshaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolshaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
