
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatComponentModule } from './mat.module';
import { NbModule } from './nb.module';
import { MaincontentComponent } from './pages/maincontent/maincontent.component';
import { SidefilterComponent } from './pages/sidefilter/sidefilter.component';


@NgModule({
  declarations: [
    AppComponent,
    MaincontentComponent,
    SidefilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentModule,
    NbModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
