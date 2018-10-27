import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserService, User } from "../services/user.service";

@Component({
  selector: "app-enfrentamento-modal",
  templateUrl: "./enfrentamento-modal.page.html",
  styleUrls: ["./enfrentamento-modal.page.scss"]
})
export class EnfrentamentoModalPage implements OnInit {
  users: User[];

  constructor(
    public modalController: ModalController,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
