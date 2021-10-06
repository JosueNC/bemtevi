export class SidenavItem {
    iconName: string;
    description: string;
    route: string;
    constructor(
      iconName: string,
      description: string,
      route: string
    ) {
      this.iconName = iconName;
      this.description = description;
      this.route = route;
    }
  }
  