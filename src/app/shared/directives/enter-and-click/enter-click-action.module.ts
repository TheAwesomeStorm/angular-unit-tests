import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterClickActionDirective } from './enter-click-action.directive';



@NgModule({
  declarations: [EnterClickActionDirective],
  imports: [
    CommonModule
  ],
  exports: [EnterClickActionDirective]
})
export class EnterClickActionModule { }
