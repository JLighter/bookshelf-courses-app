import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinylPreviewComponent } from './components/vinyl-preview/vinyl-preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VinylPreviewComponent],
  exports: [VinylPreviewComponent]
})
export class VinylModule { }
