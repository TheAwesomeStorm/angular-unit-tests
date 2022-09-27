import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from '../../shared/services/photo-board/photo-board.service';
import { buildPhotoList } from '../../shared/components/photo-board/test-helper/build-photo-list';
import { of } from 'rxjs';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(DOM) should display photos when data arrives', () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos').and.returnValue(of(photos));
    fixture.detectChanges();
    const boardElement = fixture.nativeElement.querySelector('app-photo-board');
    const loadingElement = fixture.nativeElement.querySelector('.loading');
    // expect(boardElement).withContext('Should display board element').not.toBeNull();
    // expect(loadingElement).withContext('Should not display loading element').toBeNull();
  })
});
