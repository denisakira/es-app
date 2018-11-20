import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-humor',
  templateUrl: './humor.page.html',
  styleUrls: ['./humor.page.scss'],
})
export class HumorPage implements OnInit {
  formHumor: FormGroup;
  humores: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private humorService: HumorService) { }

  ngOnInit() {
    // Definição do formulario.
    this.formHumor = this.formBuilder.group({
      humor: ['', Validators.required],
    });
    // Carregamento dos registros salvos.
    this.carregaHumores();
  }

  // Salva um novo registro no firebase.
  submitNovoHumor() {
  }

  // Carrega os registros existentes no firebase.
  carregaHumores() {
    this.humores = this.humorService.carregaHumores();
  }

}
