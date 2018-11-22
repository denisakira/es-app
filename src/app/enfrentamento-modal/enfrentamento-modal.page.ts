import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { CartaoService, Cartao } from '../services/cartao.service';

@Component({
  selector: 'app-enfrentamento-modal',
  templateUrl: './enfrentamento-modal.page.html',
  styleUrls: ['./enfrentamento-modal.page.scss']
})
export class EnfrentamentoModalPage {
  enfrentamentoForm: FormGroup = this.fb.group({
    descricao: ['']
  });
  image = '/assets/images/placeholder-image.jpg';

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
    private camera: Camera,
    private cartaoService: CartaoService
  ) {}

  closeModal() {
    this.modalController.dismiss();
  }

  async onSubmit() {
    const cartao: Cartao = {
      descricao: this.enfrentamentoForm.value.descricao,
      foto: this.image,
      concluido: false
    };

    this.cartaoService.addCartao(cartao).then(res => {
      this.closeModal();
    });
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.image = base64Image;
      },
      err => {
        // Handle error
      }
    );
  }
}
