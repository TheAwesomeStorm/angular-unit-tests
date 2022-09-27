import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnInit, OnChanges {

  @Input() public photos: Photo[] | null = [];
  public rows: any[][] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges (changes: SimpleChanges) {
    if(changes['photos']) {
      this.rows = this.groupColumns(changes['photos'].currentValue);
    }
  }

  public groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    const rowStep = 4;
    for (let i = 0; i < photos.length; i += rowStep) {
      newRows.push(photos.slice(i, i + rowStep));
    }
    return newRows;
  }

}
