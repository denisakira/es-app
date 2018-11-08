import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfrentamentoModalPage } from './enfrentamento-modal.page';

describe('EnfrentamentoModalPage', () => {
  let component: EnfrentamentoModalPage;
  let fixture: ComponentFixture<EnfrentamentoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfrentamentoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfrentamentoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
