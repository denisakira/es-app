import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService, User } from "../services/user.service";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-enfrentamento-modal",
  templateUrl: "./enfrentamento-modal.page.html",
  styleUrls: ["./enfrentamento-modal.page.scss"]
})
export class EnfrentamentoModalPage implements OnInit {

  enfrentamentoForm: FormGroup = this.fb.group({
    descricao: [""]
  });

  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  onSubmit() {
    console.log(this.enfrentamentoForm);
  }
}
