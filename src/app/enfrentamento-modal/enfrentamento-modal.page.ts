import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService, User } from "../services/user.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-enfrentamento-modal",
  templateUrl: "./enfrentamento-modal.page.html",
  styleUrls: ["./enfrentamento-modal.page.scss"]
})
export class EnfrentamentoModalPage implements OnInit {
  users: Observable<User[]>;

  constructor(
    public modalController: ModalController,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
