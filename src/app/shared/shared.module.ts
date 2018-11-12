import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoutingButtonsComponent } from './ui/couting-buttons/couting-buttons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoutingButtonsComponent],
  exports: [CoutingButtonsComponent]
})
export class SharedModule { }
