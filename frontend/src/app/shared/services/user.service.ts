import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import jwt_decode from "jwt-decode";

import { BehaviorSubject } from "rxjs";
import { UserToken } from "src/app/models/user-token";
import { Router } from "@angular/router";
import { AlertifyService } from "./alertify.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);

  constructor(private tokenService: TokenService, private router: Router, private alertifyService: AlertifyService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  login(token: string) {
    this.tokenService.addToken(token);
    this.decodeAndNotify();
  }

  getToken() {
    return this.tokenService.getToken();
  }

  logOut() {
    this.tokenService.removeToken();
    this.logOutAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getUserId() {
    return this.decodeToken().id;
  }

  getUserEmail() {
    return this.decodeToken().email;
  }

  isTokenExpired() {
    
    // console.log(this.decodeToken())
    if (!this.decodeToken()) {
      this.alertifyService.error('Sessão expirada. Realize login novamente!')
      return true
    }
    
    const dateNow = Date.now().valueOf() / 1000;

    return this.decodeToken().exp < dateNow;
  }

  isAuthenticated(): boolean {
    return this.tokenService.hasToken() && !this.isTokenExpired();
  }

  private decodeAndNotify() {
    let user = this.decodeToken();
    this.userSubject.next(user);
  }

  private decodeToken() {
    if(this.tokenService.hasToken()){
      const token = this.tokenService.getToken();
      try {
        let user = jwt_decode(token) as UserToken;
        return user;
      } catch (error) {
        this.logOut();        
      }
    }
    return null;
  }

  private logOutAndNotify() {
    this.userSubject.next(null);
    this.router.navigateByUrl('/login');
  }
}
