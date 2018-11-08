import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { EmailComposer } from "@ionic-native/email-composer/ngx";
import { UserService } from "../services/user.service";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: HomePage }])
  ],
  providers: [EmailComposer, UserService],
  declarations: [HomePage]
})
export class HomePageModule {}
