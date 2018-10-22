import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfrentamentoPage } from './enfrentamento.page';

describe('EnfrentamentoPage', () => {
  let component: EnfrentamentoPage;
  let fixture: ComponentFixture<EnfrentamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfrentamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfrentamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
