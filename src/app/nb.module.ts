import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbThemeModule } from '@nebular/theme';
import { Component , NgModule} from '@angular/core';


@NgModule({
  imports: [
    NbLayoutModule,
    NbSidebarModule
  ],
  exports: [
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService]
})
export class NbModule { }
