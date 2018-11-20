import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentoAutomaticoPage } from './pensamento-automatico.page';

describe('PensamentoAutomaticoPage', () => {
  let component: PensamentoAutomaticoPage;
  let fixture: ComponentFixture<PensamentoAutomaticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensamentoAutomaticoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensamentoAutomaticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
