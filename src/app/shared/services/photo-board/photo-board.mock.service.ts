import { Injectable } from '@angular/core';
import { PhotoBoardService } from './photo-board.service';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from '../../components/photo-board/test-helper/build-photo-list';
import { Photo } from '../../interfaces/photo';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  override getPhotos (): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
