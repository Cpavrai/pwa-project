import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor(private http: HttpClient) {}

  addPushSubscriber(objToken: any) {
    return this.http.post("http://localhost:3000/token", objToken);
  }
}
