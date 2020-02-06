import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule
, MatProgressSpinnerModule,  
MatProgressBarModule,
MatToolbarModule, 
MatSidenavModule,
MatMenuModule,
MatListModule,
MatDividerModule,
MatGridListModule,
MatExpansionModule,
MatCardModule,
MatTabsModule,
MatStepperModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatAutocompleteModule,
MatCheckboxModule,
MatRadioModule} from '@angular/material';
import {MatBadgeModule, MatBadge} from '@angular/material/badge'
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
MatSidenavModule,
MatMenuModule,
MatListModule,
MatDividerModule,
MatGridListModule,
MatExpansionModule,
MatCardModule,
MatTabsModule,
MatStepperModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatAutocompleteModule,
MatCheckboxModule,
MatRadioModule
]



@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
