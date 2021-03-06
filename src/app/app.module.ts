import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms'
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
import { ExpansionPanelsComponent } from './comps/expansion-panels/expansion-panels.component';
import { CardsComponent } from './comps/cards/cards.component';
import { TabsComponent } from './comps/tabs/tabs.component';
import { StepperComponent } from './comps/stepper/stepper.component';
import { InputComponent } from './comps/input/input.component';
import { SelectComponent } from './comps/select/select.component';
import { AutocompleteComponent } from './comps/autocomplete/autocomplete.component';
import { CheckboxAndRadioButtonsComponent } from './comps/checkbox-and-radio-buttons/checkbox-and-radio-buttons.component';
import { DatePickerComponent } from './comps/date-picker/date-picker.component';
import { TooltipComponent } from './comps/tooltip/tooltip.component';
import { SnackbarComponent } from './comps/snackbar/snackbar.component';
import { DialogsComponent } from './comps/dialogs/dialogs.component';
import { DialogsExampleComponent } from './comps/dialogs-example/dialogs-example.component';

import { DatatableComponent } from './comps/datatable/datatable.component';
import { VirtualScrollingComponent } from './comps/virtual-scrolling/virtual-scrolling.component';
import {ScrollingModule} from '@angular/cdk/scrolling'
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
    GridsComponent,
    ExpansionPanelsComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxAndRadioButtonsComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogsComponent,
    DialogsExampleComponent,
    
    DatatableComponent,
    
    VirtualScrollingComponent
  ],
  entryComponents:[DialogsExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
