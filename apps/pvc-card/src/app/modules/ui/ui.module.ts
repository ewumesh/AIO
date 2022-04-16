import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './input/ui-input/ui-input.component';

@NgModule({
  declarations: [UiInputComponent],
  imports: [CommonModule],
  exports: [UiInputComponent],
})
export class UiModule {}
