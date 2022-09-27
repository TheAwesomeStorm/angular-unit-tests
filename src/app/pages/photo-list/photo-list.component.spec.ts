import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { PhotoBoardService } from '../../shared/services/photo-board/photo-board.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      description: 'example 1',
      src: ''
    },
    {
      id: 2,
      description: 'example 2',
      src: ''
    }
  ]
}

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoBoardService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
    httpTestingController = TestBed.inject(HttpTestingController)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(DOM) should display photos when data arrives', () => {
    httpTestingController.expectOne(mockData.api).flush(mockData.data);
    fixture.detectChanges();
    const boardElement = fixture.nativeElement.querySelector('app-photo-board');
    const loadingElement = fixture.nativeElement.querySelector('.loading');
    expect(boardElement).withContext('Should display board element').not.toBeNull();
    expect(loadingElement).withContext('Should not display loading element').toBeNull();
  })

  it('(DOM) should display loading element while data is not present', () => {
    fixture.detectChanges();
    const boardElement = fixture.nativeElement.querySelector('app-photo-board');
    const loadingElement = fixture.nativeElement.querySelector('.loading');
    expect(boardElement).withContext('Should display board element').toBeNull();
    expect(loadingElement).withContext('Should not display loading element').not.toBeNull();
  });
});
