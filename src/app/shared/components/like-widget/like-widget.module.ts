import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EnterClickActionModule } from '../../directives/enter-and-click/enter-click-action.module';

@NgModule({
  declarations: [
    LikeWidgetComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    EnterClickActionModule,
  ],
  exports: [
    LikeWidgetComponent
  ],
  providers: [
    UniqueIdService
  ]
})
export class LikeWidgetModule {}
