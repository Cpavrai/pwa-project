import { Component, OnInit } from "@angular/core";
import { PushService } from "../_services/push.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private pushService: PushService) {}

  ngOnInit() {}

  subscribeToNotifications() {
    this.pushService.subscribeToNotifications();
  }
}
