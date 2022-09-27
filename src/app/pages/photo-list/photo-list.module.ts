import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardModule } from '../../shared/components/photo-board/photo-board.module';
import { PhotoBoardService } from '../../shared/services/photo-board/photo-board.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    PhotoBoardModule,
    FontAwesomeModule
  ],
  exports: [
    PhotoListComponent
  ],
  providers: [
    PhotoBoardService
  ]
})
export class PhotoListModule { }
