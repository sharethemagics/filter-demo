import { Component } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ NbSidebarService, NbMenuService]
})
export class AppComponent {
  title = 'app';
  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService) { }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
}
