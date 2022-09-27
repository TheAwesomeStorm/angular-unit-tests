import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoBoardService } from '../../shared/services/photo-board/photo-board.service';
import { PhotoBoardMockService } from '../../shared/services/photo-board/photo-board.mock.service';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ],
      providers: [{
        provide: PhotoBoardService,
        useClass: PhotoBoardMockService,
        // useValue: {
        //   getPhotos(): Observable<Photo[]> {
        //     return of(buildPhotoList());
        //   }
        // }
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(DOM) should display photos when data arrives', () => {
    fixture.detectChanges();
    const boardElement = fixture.nativeElement.querySelector('app-photo-board');
    const loadingElement = fixture.nativeElement.querySelector('.loading');
    expect(boardElement).withContext('Should display board element').not.toBeNull();
    expect(loadingElement).withContext('Should not display loading element').toBeNull();
  })
});
