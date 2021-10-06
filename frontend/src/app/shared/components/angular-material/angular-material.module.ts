import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

/**Navigation.*/
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";

/**Buttons & Indicators.*/
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

/**Popups & Modals.*/
import { MatDialogModule } from "@angular/material/dialog";

/**Form Controls.*/
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

/**Layout.*/
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";

/**Data Table.*/
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule,

    /**Navigation.*/
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,

    /**Buttons & Indicators.*/
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,

    /**Popups & Modals.*/
    MatDialogModule,

    /**Form Controls.*/
    MatSlideToggleModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,

    /**Layout.*/
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,

    /**Data Table.*/
    MatTableModule,
  ],
  exports: [
    /**Navigation.*/
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,

    /**Buttons & Indicators.*/
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,

    /**Popups & Modals.*/
    MatDialogModule,

    /**Form Controls.*/
    MatSlideToggleModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,

    /**Layout.*/
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,

    /**Data Table.*/
    MatTableModule,

    MatAutocompleteModule,
  ],
})
export class AngularMaterialModule {}
