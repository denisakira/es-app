import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HumorService, Humor } from '../services/humor.service';

@Component({
  selector: 'app-humor',
  templateUrl: './humor.page.html',
  styleUrls: ['./humor.page.scss']
})
export class HumorPage implements OnInit {
  formHumor: FormGroup;
  humores: Observable<Humor[]>;

  constructor(
    private formBuilder: FormBuilder,
    private humorService: HumorService
  ) {}

  ngOnInit() {
    // Definição do formulario.
    this.formHumor = this.formBuilder.group({
      humor: ['', Validators.required]
    });
    // Carregamento dos registros salvos.
    this.carregaHumores();
  }

  // Salva um novo registro no firebase.
  async submitNovoHumor() {
    const humor: Humor = {
      value: this.formHumor.value.humor
    };
    this.humorService.submitNovoHumor(humor);
  }

  // Carrega os registros existentes no firebase.
  async carregaHumores() {
    this.humores = await this.humorService.carregaHumores();
    console.log(this.humores);
  }
}
