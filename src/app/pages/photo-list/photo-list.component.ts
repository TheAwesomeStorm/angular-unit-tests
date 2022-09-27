import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../shared/interfaces/photo';
import { PhotoBoardService } from '../../shared/services/photo-board/photo-board.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  public title = 'angular-unit-tests';
  public photos$: Observable<Photo[]> = new Observable<Photo[]>();
  public fa = { faCircleNotch }

  constructor (private service: PhotoBoardService) {}

  ngOnInit () {
    this.photos$ = this.service.getPhotos();
  }

}
