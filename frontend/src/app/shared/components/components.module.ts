import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';

import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatPaginatorModule
  ],
  declarations: [
    HeaderComponent,
    SideNavComponent,
    
  ],
  exports: [
    AngularMaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    SideNavComponent
  ]
})
export class ComponentsModule { }
