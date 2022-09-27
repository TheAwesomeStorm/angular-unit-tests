import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardModule } from '../../components/photo-board/photo-board.module';
import { PhotoBoardService } from '../../services/photo-board/photo-board.service';



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
