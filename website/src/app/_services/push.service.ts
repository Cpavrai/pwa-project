import { Injectable } from "@angular/core";
import { SwPush } from "@angular/service-worker";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root"
})
export class PushService {
  readonly VAPID_PUBLIC_KEY: string =
    "BJRDgsnJ5YgUW92B8O_lszN5Za7440FL2d9JCSwcU-0mT7OcMyLwrgxKTK75bugJf5YPMpjmjBqMPzKaMLmp7JU";

  constructor(private swPush: SwPush, private tokenService: TokenService) {}

  subscribeToNotifications() {
    console.log("subscribeToNotifications");
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(res => console.log(res));
    // .then(sub => this.tokenService.addPushSubscriber(sub).subscribe())
    // .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
