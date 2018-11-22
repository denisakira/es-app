import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumorPage } from './humor.page';

describe('HumorPage', () => {
  let component: HumorPage;
  let fixture: ComponentFixture<HumorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
