import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { SidenavItemFactory } from 'src/app/helpers/factory/sidenav-item.factory';
import { SidenavItem } from 'src/app/models/side-nav-item';
import { User } from 'src/app/models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public opened = false; //inicializar aberto
  public mode = "over"; //over para celualr
  private end: Subject<boolean> = new Subject();

  public sidenavItems: SidenavItem[] = [];

  user$: Observable<User>;
  
  constructor(
    private router: Router,
    private userService: UserService,
    
  ) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();

    this.userService.getUser()
      .subscribe(
        (user: User) => {
          if(!user)
            return
            
          if(this.userService.isTokenExpired()) {
            this.userService.logOut();
          }

          console.log(user)
          this.sidenavItems = SidenavItemFactory.buildSidenav(user.id_role);
          console.log(this.sidenavItems)
        }
      )
  }

  public goTo(sidenavItem: SidenavItem, sidenav?: MatDrawer): void {
    this.router.navigate([sidenavItem.route]);
    //sidenav.close();
  }

  public logout(sidenav: MatDrawer): void {
    this.userService.logOut();
    sidenav.close();
  }

}
