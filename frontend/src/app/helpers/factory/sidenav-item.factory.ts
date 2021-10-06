import { SidenavItem } from "src/app/models/side-nav-item";

// Link icons: https://materializecss.com/icons.html
export class SidenavItemFactory {
  public static buildSidenav(role: number): SidenavItem[] {
    const sidenavItems: SidenavItem[] = [];

    // ADMIN
    if(role == 1) {
      sidenavItems.push(new SidenavItem("restaurant_menu", "Estoque", `/estoque`));
      sidenavItems.push(new SidenavItem("restaurant", "Produto", `/produtos/cadastrar`));
    }

    // FUNCIONARIO
    if(role == 2) {
      sidenavItems.push(new SidenavItem("ac_unit", "Funcionario", `/enel`));
    }

    // USUARIO
    if(role == 3) {
      sidenavItems.push(new SidenavItem("ac_unit", "Usuario", `/enel`));
    }
    
    return sidenavItems;
  }
}

// add_circle_outline
