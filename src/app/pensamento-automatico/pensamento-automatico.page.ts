import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PensamentoService, Pensamento } from '../services/pensamento.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pensamento-automatico',
  templateUrl: './pensamento-automatico.page.html',
  styleUrls: ['./pensamento-automatico.page.scss']
})
export class PensamentoAutomaticoPage implements OnInit {
  formPensamento: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pensamentoService: PensamentoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.formPensamento = this.formBuilder.group({
      situacao: ['', Validators.required],
      pensamento: ['', Validators.required],
      acao: ['', Validators.required]
    });
  }

  async submitNovoPensamento() {
    const pensamento: Pensamento = {
      situacao: this.formPensamento.value.situacao,
      pensamento: this.formPensamento.value.pensamento,
      acao: this.formPensamento.value.acao
    };
    const res = await this.pensamentoService.submitNovoPensamento(pensamento);
    this.formPensamento.reset();
    this.router.navigateByUrl('/app/tabs/(home:home)');

  }
}
