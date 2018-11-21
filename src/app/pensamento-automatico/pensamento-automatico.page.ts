import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pensamento-automatico',
  templateUrl: './pensamento-automatico.page.html',
  styleUrls: ['./pensamento-automatico.page.scss'],
})
export class PensamentoAutomaticoPage implements OnInit {
  formPensamento: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formPensamento = this.formBuilder.group({
      situacao: ['', Validators.required],
      pensamento: ['', Validators.required],
      acao: ['', Validators.required],
    });
  }

  async submitNovoPensamento() {
    console.log('novo pensamento');
  }

}
