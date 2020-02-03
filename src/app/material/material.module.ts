import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule
, MatProgressSpinnerModule,  
MatProgressBarModule,MatToolbarModule} from '@angular/material';
import {MatBadgeModule, MatBadge} from '@angular/material/badge'
const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule]



@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
