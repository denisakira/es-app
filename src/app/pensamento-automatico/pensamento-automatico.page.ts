import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PensamentoService, Pensamento } from '../services/pensamento.service';

@Component({
  selector: 'app-pensamento-automatico',
  templateUrl: './pensamento-automatico.page.html',
  styleUrls: ['./pensamento-automatico.page.scss'],
})
export class PensamentoAutomaticoPage implements OnInit {
  formPensamento: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pensamentoService: PensamentoService
  ) { }

  ngOnInit() {
    this.formPensamento = this.formBuilder.group({
      situacao: ['', Validators.required],
      pensamento: ['', Validators.required],
      acao: ['', Validators.required],
    });
  }

  async submitNovoPensamento() {
    const pensamento: Pensamento = {
      situacao: this.formPensamento.value.situacao,
      pensamento: this.formPensamento.value.pensamento,
      acao: this.formPensamento.value.acao
    };
  }

}
