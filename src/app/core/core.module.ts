import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VinylService} from './services/vinyl.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [VinylService]
})
export class CoreModule { }
