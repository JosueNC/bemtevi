import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class TokenService {
  private userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );

  private token = "X-Authorization";

  addToken(token): void {
    localStorage.setItem(this.token, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.token);
  }

  hasToken(): boolean {
    return !!localStorage.getItem(this.token);
  }

  getToken(): string {
    return localStorage.getItem(this.token);
  }
}
