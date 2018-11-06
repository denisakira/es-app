import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EnfrentamentoModalPage } from "../enfrentamento-modal/enfrentamento-modal.page";

@Component({
  selector: "app-enfrentamento",
  templateUrl: "./enfrentamento.page.html",
  styleUrls: ["./enfrentamento.page.scss"]
})
export class EnfrentamentoPage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: EnfrentamentoModalPage,
      // componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
