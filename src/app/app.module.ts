import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from './material/material.module';
import { MatButtonModule } from '@angular/material';
import { TypographyComponent } from './comps/typography/typography.component';
import { ButtonsComponent } from './comps/buttons/buttons.component';
import { IconsComponent } from './comps/icons/icons.component';
import { BadgesComponent } from './comps/badges/badges.component';
import { SpinnerModuleComponent } from './comps/spinner-module/spinner-module.component';
import { NavbarsComponent } from './comps/navbars/navbars.component';
import { SidebarComponent } from './comps/sidebar/sidebar.component';
import { MenusComponent } from './comps/menus/menus.component';
import { ListsComponent } from './comps/lists/lists.component';
import { GridsComponent } from './comps/grids/grids.component';
@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    IconsComponent,
    BadgesComponent,
    SpinnerModuleComponent,
    NavbarsComponent,
    SidebarComponent,
    MenusComponent,
    ListsComponent,
    GridsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
