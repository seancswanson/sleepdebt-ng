import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  infoBarToggled: boolean;

  toggleInfoBar() {
    this.infoBarToggled = !this.infoBarToggled;
  }
}
