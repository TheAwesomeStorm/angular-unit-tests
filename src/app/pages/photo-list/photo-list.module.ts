import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardModule } from '../../shared/components/photo-board/photo-board.module';
import { PhotoBoardService } from '../../shared/services/photo-board/photo-board.service';



@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    PhotoBoardModule
  ],
  exports: [
    PhotoListComponent
  ],
  providers: [
    PhotoBoardService
  ]
})
export class PhotoListModule { }
