import { NgModule } from '@angular/core';
import { NgtekCardComponent } from './ngtek-card.component';
import { CommonModule } from '@angular/common';
import { ImageRotationDirective } from './image-rotation.directive';

@NgModule({
  declarations: [NgtekCardComponent, ImageRotationDirective],
  imports: [
    CommonModule
  ],
  exports: [NgtekCardComponent]
})
export class NgtekCardModule { }
