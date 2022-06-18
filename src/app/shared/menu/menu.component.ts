import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class MenuComponent {

  menu: MenuItem [] = [
    { route: 'graphs/bar', text: 'bars'},
    { route: 'graphs/double-bar', text: 'double bars'},
    { route: 'graphs/doughnut', text: 'doughnuts'},
    { route: 'graphs/doughnut-http', text: 'doughnuts http'},
  ]

}
